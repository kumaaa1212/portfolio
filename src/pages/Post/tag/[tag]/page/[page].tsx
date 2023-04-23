import Layout from "@/Layout/Layout";
import { getAllTags,getNumberOfPageByTage, getPostByTagPage, } from "@/libs/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import SinglePost from "@/pages/component/SinglePost";
import Pagenation from "@/pages/component/Pagenation";
import { PostData } from "@/pages/component/Blog";
import Tag from "@/pages/component/Tag";
interface Props{
  numberOfPageByTag:number;
  posts:PostData[];
  currentTag:string;
  allTags:string[];
}
const BlogTagPageList = ({allTags,posts,currentTag,numberOfPageByTag}:Props) => {
return (
  <Layout>
    <main className='bg-gray-800 h-screen'>
      <h1 className='text-center text-white text-5xl py-10'>KUMA BLOG</h1>
      <section className='cursor-pointer sm:grid grid-cols-2 w-5/6 gap-3 mx-auto'>
      {posts.map((post) =>(
        <div key={post.id} >
        <SinglePost slug={post.slug} tags={post.tags} title={post.title} description={''} isPageNation={true} />
        </div>
      ))}
      </section>
      <Pagenation numberOfPage={numberOfPageByTag} tag={currentTag}/>
      <Tag tags={allTags}/>
    </main>
  </Layout>
)
}
export default BlogTagPageList;
export const getStaticProps:GetStaticProps = async(context) =>{
  const currentTag= context.params?.tag;
  const currentPage =context.params?.page;
  const posts = await getPostByTagPage(currentTag,currentPage);
  const numberOfPageByTag = await getNumberOfPageByTage(currentTag);
  const allTags = await getAllTags();
return {
  props: {
    posts:posts,
    numberOfPageByTag,
    currentTag,
    allTags
  }, 
}
}
export const getStaticPaths:GetStaticPaths = async() =>{
  const alltags = await getAllTags()
  let params:any = [];
  await Promise.all(
    alltags.map(async (tag:string) =>{
      const numberOfpageBytag = await getNumberOfPageByTage(tag);
      for (let i = 1; i <= numberOfpageBytag; i++) {
        params.push({ params: { tag: tag, page: i.toString() } });
      }
    })
    )

  // numberOfpageBytagにはgetNumberOfPageByTageの結果が入る
  // await Promise.allはawaitの中にあるとき普通に書いたら並列処理をしてくれない。それを防ぐためにある。順番に全部行うよって
  return{
    paths:params,
    fallback:'blocking',
  }
}
