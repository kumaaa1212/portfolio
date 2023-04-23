import { getAllTags, getPostsForTopPage } from '@/libs/notion'
import React from 'react'
import Layout from '@/Layout/Layout';
import SinglePost from './SinglePost';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Tag from './Tag';

export type PostData = {
  id?: number
  title: string;
  description: string;
  tags: string[];
  slug: string;
  isPageNation?: boolean
}
interface BlogProps{
  fourPost:PostData[];
  allTags:string[]
}

const Blog = ({fourPost,allTags}:BlogProps) => {
  return (
    <Layout>
      <main className='bg-gray-800 h-screen'>
        <h1 className='text-center text-white text-5xl py-10'>KUMA BLOG</h1>
        {fourPost.map((post:PostData) =>(
          <div key={post.id} className='cursor-pointer' >
          <SinglePost slug={post.slug} tags={post.tags} title={post.title} description={''} isPageNation={false} />
          </div>
        ))}
        <Link href='/Post/1' className='text-white font-bold ml-20 text-2xl'>...see more</Link>
        {/* pagesの中からスタートする。 */}
        <Tag tags={allTags}/>
      </main>
    </Layout>
  )
}
export default Blog

export const getStaticProps:GetStaticProps = async() =>{
  const fourPost =await getPostsForTopPage();
  const allTags = await getAllTags();
  return {
    props: {
      fourPost:fourPost,
      allTags:allTags
    }, 
  }
}
