import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { getAllPost, getSinglePost } from '@/libs/notion';
import Layout from '@/Layout/Layout';
export const getStaticPaths = async () => {
  const allPost = await getAllPost();
  console.log(getAllPost());
  const path = allPost.map(({ slug }) => ({ params: { slug } }))
  return {
    paths: path,
    fallback: 'blocking',
  }
}
export async function getStaticProps({ params }: any) {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post: post
    },
    // revalidate: 60 , 
  };
}

const Post = ({ post }: any) => {
  return (
    <Layout>
      <div className='bg-gray-800 h-screen'>
      <section className='container lg:px-2 px-5 lg:w-2/5 mx-auto pt-10'>
        <h2 className='w-full text-2xl font-bold text-white'>{post.metaData.title}</h2>
        <div className='border-b-2 w-1/3 mt-1 border-sky-900'>{post.metaData.description}</div>
        {post.metaData.tags.map((tag: string) => (
          <span className='text-white bg-sky-900 rounded-xl font-bold mt-6 px-6 inline-block mr-2 text-2xl' key={tag}>{tag}</span>
          ))}
        <br />
        <div className='mt-10 font-medium text-white'>
          <ReactMarkdown>
            {post.markDown}
          </ReactMarkdown>
        </div>
      </section>
          </div>
    </Layout>
  )
}

export default Post