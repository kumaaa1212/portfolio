import Link from 'next/link';
import React from 'react'
type Props = {
  id?: number
  title: string;
  description: string;
  tags: string[];
  slug: string;
  isPageNation: boolean
}
const SinglePost = ({ title, description, tags, slug, isPageNation }: Props) => {
  return (
    <div>

      {isPageNation ? (
        <section className=' bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300'>
          <div className='lg:flex items-center'>
            <Link href={`/component/${slug}`}>
              <h2 className='text-gray-100 font-medium text-2xl mb-2'>
                {title}
              </h2>
            </Link>
            <div className='text-gray-100'>{description}</div>
            {tags && tags.map((tag) => (
              <a href={`/Post/tag/${tag}/page/1`} key={tag}>
                <span className='text-white bg-gray-500 px-2 pb-1 font-medium mr-2' key={tag}>{tag}</span>
              </a>
            ))}
          </div>
        </section>
      ) : (
        <section className=' lg:w-1/2 bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300'>
          <div className='flex items-center gap-3'>
            <h2 className='text-gray-100 font-medium text-2xl mb-2'>
            <Link href={`/component/${slug}`}>
              {title}
            </Link>
            </h2>
            <div className='text-gray-100'>{description}</div>
            {tags && tags.map((tag) => (
              <a href={`/Post/tag/${tag}/page/1`} key={tag}>
                <span className='text-white bg-gray-500 px-2 pb-1 font-medium' key={tag}>{tag}</span>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
export default SinglePost;