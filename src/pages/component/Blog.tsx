import { getAllPost } from '@/libs/notion'
import React from 'react'
import Layout from '@/Layout/Layout';
import SinglePost from './SinglePost';
type PostData ={
    id?:number;
    slug:string;
    tags: string[];
    title:string;
    description?:string;
}
const Blog = ({allData}:any) => {
  return (
    <Layout>
      <main className='bg-gray-800 h-screen'>
        <h1 className='text-center text-white text-5xl py-10'>KUMA BLOG</h1>
        {allData.map((post:PostData) =>(
          <div key={post.id} className='cursor-pointer'>
          <SinglePost slug={post.slug} tags={post.tags} title={post.title} description={''} />
          </div>
        ))}
      </main>
    </Layout>
  )
}
export default Blog
export async function getStaticProps() {
  const allData = await getAllPost();
  return {
    props: {
      allData:allData
    }, 
  }
}
