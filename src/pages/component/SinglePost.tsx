import Link from 'next/link';
import React from 'react'
type Props = {
  id?: number
  title: string;
  description: string;
  tags: string[];
  slug: string;
}
const SinglePost = ({ title, description, tags, id, slug }: Props) => {
  return (
    <section className=' lg:w-1/2 bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300'>
      <div className='flex items-center gap-3'>
        <h2 className='text-gray-100 font-medium text-2xl mb-2'>
          <Link href={`/component/${slug}`}>
            {title}
          </Link>
        </h2>
        <div className='text-gray-100'>{description}</div>
        {tags.map((tag) => (
          <span className='text-white bg-gray-500 px-2 pb-1 font-medium' key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  )
}
export default SinglePost;
