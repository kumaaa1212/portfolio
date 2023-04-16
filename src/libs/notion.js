import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md";
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const n2m = new NotionToMarkdown({ notionClient: notion });
export const getAllPost = async () => {
  const myPage = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 100,
  });
  const allpost = myPage.results;
  return allpost.map((post) => getPageMataData(post))
};
const getPageMataData = (post) => {
  const getTage = (tag) => {
    const alltags = tag.map((tag) => {
      return tag.name
    })
    return alltags;
  }
  return {
    id: post.id,
    title: post.properties.名前.title[0].plain_text,
    tags: getTage(post.properties.タグ.multi_select),
    slug:post.properties.slug.rich_text[0].plain_text,
  }
}
export const getSinglePost = async(slug) =>{
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter:{
      property:'slug',
      formula:{
        string:{
          equals:slug
        },
      },
    },
  });
  const page = response.results[0];
  const metaData = getPageMataData(page);
  const mdblock = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblock);
  return{
    metaData:metaData,
    markDown:mdString
  }
}


