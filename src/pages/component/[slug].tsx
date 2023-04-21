import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { getAllPost, getSinglePost } from '@/libs/notion';
import Link from 'next/link';
import { PostData } from './Blog';
interface Props{
  markDown:string;
  metaData:PostData;
}
interface Post{
post:Props
}
const Post = ({post}:Post) => {
  return (
    <div className='bg-gray-800 h-screen'>
      <section className='container lg:px-2 px-5 lg:w-2/5 mx-auto pt-10'>
        <h2 className='w-full text-2xl font-bold text-white'>{post.metaData.title}</h2>
        <div className='border-b-2 w-1/3 mt-1 border-sky-900'>{post.metaData.description}</div>
        {post.metaData.tags.map((tag: string,index:number) => (
          <span className='text-white bg-sky-900 rounded-xl font-bold mt-6 px-6 inline-block mr-2 text-2xl' key={index}><Link href={`/Post/tag/${tag}/page/1`}>{tag}</Link></span>
        ))}
        <br />
        <div className='mt-10 font-medium text-white'>
          <ReactMarkdown>
            {post.markDown}
          </ReactMarkdown>
        </div>
      </section>
    </div >
  )
}
export default Post;
export async function getStaticProps({params}:any) {
  console.log(params)
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post: post
    },
    revalidate: 60 * 60 * 6
  };
}
export const getStaticPaths = async () => {
  const allPost = await getAllPost();
  const path = allPost.map(({ slug }) => ({ params: { slug: slug } }))
  return {
    paths: path,
    fallback: 'blocking',
  }
}
