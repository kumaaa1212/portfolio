import Link from 'next/link'
import React from 'react'
interface TagProps{
  tags:string[]
}
 const Tag = ({tags}:TagProps) => {
  return (
    <div className='mx-4'>
      <section className='lg:w-1/2 mb-8 mx-auto bg-gray-700 rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 duration-300 transition-all'>
        <div className='font-medium mb-4 text-white'>タグ検索</div>
        <div className='flex flex-wrap gap-5'>
          {tags.map((tag:string,index:number) =>(
          <Link href={`/Post/tag/${tag}/page/1`} key={index}>
            <span className='text-white bg-gray-500 px-2 pb-1 font-medium'>{tag}</span>
          </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Tag:

