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
export const getPostsForTopPage = async() =>{
  const allpost = await getAllPost();
  const fourPost = allpost.slice(0,4);
  return fourPost
}

export const getPostBypage =async (page) =>{
  const allpost = await getAllPost();
  const startIndex = (page - 1) * 4;
  // 配列だから1を引いている
  const  endINdex = startIndex + 4;
  // それに4を足すことで終了場所がわかる
  return allpost.slice(startIndex,endINdex);
}


export const getNumberOfPage = async() =>{
const allpost =await getAllPost();
return Math.floor(allpost.length / 4) + (allpost.length % 4 > 0 ? 1 : 0);
}

export const getPostByTagPage = async(tagName,page) =>{
  const allpost = await getAllPost();
  const posts = allpost.filter((post) =>post.tags.find((tag) =>tag ===tagName));
  const startIndex = (page - 1) * 4;
  const  endINdex = startIndex + 4;
  return posts.slice(startIndex,endINdex);
}
export const getNumberOfPageByTage = async(tagName) =>{
  const allpost =await getAllPost();
  const posts = allpost.filter((post) =>post.tags.find((tag) =>tag ===tagName));
return Math.floor(posts.length / 4) + (posts.length % 4 > 0 ? 1 : 0);
}
export const getAllTags = async () =>{
  const allpost =await getAllPost();
  const tag = allpost.flatMap((post) =>post.tags);
  const set = new Set(tag);
  const alltagList = Array.from(set);
  // 重複を防ぐ
 return alltagList;
}