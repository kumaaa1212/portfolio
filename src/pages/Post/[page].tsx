import Layout from "@/Layout/Layout";
import SinglePost from "../component/SinglePost";
import { getAllTags, getNumberOfPage, getPostBypage } from "@/libs/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import Pagenation from "../component/Pagenation";
import { PostData } from "../component/Blog";
import Tag from "../component/Tag";
interface Props{
  postByPage:PostData[];
  numberOfpage:number;
  alltag:string[]
}
const BlogPageList = ({postByPage,numberOfpage,alltag}:Props) => {
return (
  <Layout>
    <main className='bg-gray-800 h-screen'>
      <h1 className='text-center text-white text-5xl py-10'>KUMA BLOG</h1>
      <section className='cursor-pointer sm:grid grid-cols-2 w-5/6 gap-3 mx-auto'>
      {postByPage.map((post:PostData) =>(
        <div key={post.id} >
        <SinglePost slug={post.slug} tags={post.tags} title={post.title} description={''} isPageNation={true} />
        </div>
      ))}
      </section>
      <Pagenation numberOfPage={numberOfpage} tag={""}/>
      <Tag tags={alltag}/>
    </main>
  </Layout>
)
}
export default BlogPageList;
export const getStaticProps:GetStaticProps = async(context) =>{
  const currentPage = context.params?.page;
const postByPage= await getPostBypage(currentPage);
// ページの中身
const numberOfpage :number = await getNumberOfPage();
// ページ数
const alltag = await getAllTags();
return {
  props: {
    postByPage,
    numberOfpage,
    alltag
  }, 
}
}
export const getStaticPaths:GetStaticPaths = async() =>{
  const numberOfpage = await getNumberOfPage();
  let params = [];
  for(let i =1;i <= numberOfpage; i++){
    params.push({params :{page:i.toString()}})
  }

  return{
    paths:params,
    fallback:'blocking',
  }
}
