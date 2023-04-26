import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/Layout/Layout';

const PortfolioItem = () => {
  return (
    <Layout>
        <h2 className='text-white py-4 pl-3 text-xl'>このポートフォリオサイトは、TypeScript/Next.js/Tailwind CSS/そしてNotion APIを利用しています。</h2>
        <h2 className='text-white py-4 pl-3 text-xl'>以下に掲載されている成果物については、各説明文下に使用した開発言語を記載しています。</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-gray-800 h-screen'>
        <Link href='https://class-app-mu.vercel.app/'>
          <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 mt-8'>
            <div className='relative h-48'>
              <Image
                src='/class-app.png'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt=''
                className='rounded-lg'
              />
            </div>
            <h3 className='text-gray-100 font-bold text-lg mt-4'>出欠管理アプリ</h3>
            <p className='text-gray-400 text-sm mt-2'>大学では現在、欠席回数が定められています。体調不良などの理由で欠席することがあるかもしれませんが、自分が何回欠席したかを管理することは、効果的な大学生活を送るために重要です。これにより、欠席回数が限られていることを意識し、授業や課題に積極的に取り組むことができます。また、自己管理能力が高まり、進路や就職活動にもプラスになるかもしれません。</p>
            <p className='text-white'>React</p>
          </div>
        </Link>
        <Link href='https://kumaaa1111-github-io.vercel.app/'>
          <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 mt-8'>
            <div className='relative h-48'>
              <Image
                src={'/hakone.png'}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt=''
                className='rounded-lg'
              />
            </div>
            <h3 className='text-gray-100 font-bold text-lg mt-4'>陶芸ホームページ</h3>
            <p className='text-gray-400 text-sm mt-2'>ボタンの位置が一つ変わるだけで、購入意欲に大きな影響を与えることがあります。また、スマートフォンに対応することなど、多くの要望があります。これらの要望に応えることが求められるため、ポップページの再現性にも注意が払われています。</p>
            <p className='text-white'>HTML/CSS/javascript</p>
          </div>
        </Link>
        <Link href='https://mynote-app-xi.vercel.app/'>
          <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 mt-8 '>
            <div className='relative h-48'>
              <Image
                src={'/note-app.png'}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt=''
                className='rounded-lg'
              />
            </div>
            <h3 className='text-gray-100 font-bold text-lg mt-4 '>メモアプリ</h3>
            <p className='text-gray-400 text-sm mt-2'>このアプリは、使いやすさに重点を置いて設計され、直感的な操作でメモを簡単に作成、編集、削除できます。さらに、メモの並び順は自動的に更新され、最新の情報が常に上に表示されるので、ユーザーはいつでも最新の情報を確認できます。また、見やすさにも配慮され、シンプルで明快なデザインが採用されています。これにより、情報を素早く見つけることができます。</p>
            <p className='text-white'>React</p>
          </div>
        </Link>
        <Link href='https://pokemon-five-orcin.vercel.app/'>
          <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 mt-8'>
            <div className='relative h-48'>
              <Image
                src='/pokemon.png'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt=''
                className='rounded-lg'
              />
            </div>
            <h3 className='text-gray-100 font-bold text-lg mt-4'>ポケモン図鑑</h3>
            <p className='text-gray-400 text-sm mt-2'>ポケモン図鑑は、ポケモンのデータや画像を一覧で表示し、ユーザーがポケモンの情報を閲覧できるアプリケーションです。</p>
            <p className='text-white'>React</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default PortfolioItem;
