import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Slider from './component/Slider'
import Layout from '@/Layout/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div>
        <section className="bg-gradient-to-r from-blue-800 to-purple-700 opacity-90">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold mb-2 text-white">
              Welcome to my portfolio!
            </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
              I am a web developer and this is my portfolio website.
            </h3>
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              <Link href='/component/ContactForm'>Get In Touch</Link>
            </button>
          </div>
        </section>
        <section className="bg-gray-800 text-white py-20 animate-fade-in">
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-8 animate-slide-up">INTRODUCTION</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-slide-left">
                <h2 className="text-xl font-semibold mb-4">PROFILE</h2>
                <ul className="list-disc pl-5">
                  <li className="mb-2 list-none">NAME : 大熊亮平</li>
                  <li className="mb-2 list-none">UNIVERSITY :青山学院大学</li>
                  <li className="mb-2 list-none">MAJOR : コミュニティ人間科学部</li>
                </ul>
              </div>
              <div className="animate-slide-right">
                <h2 className="text-xl font-semibold mb-4">SKILL</h2>
                <ul className="list-disc pl-5">
                  <li className="mb-2 list-none">HTML / CSS</li>
                  <li className="mb-2 list-none">JavaScript / TypeScript</li>
                  <li className="mb-2 list-none">React</li>
                  <li className="mb-2 list-none">Next.js</li>
                  <li className="mb-2 list-none">Tailwind CSS / Material UI / Semantic UI</li>
                </ul>
                <p className='text-red-500 mt-9'>成果物はメニューバーのSITEから確認することができます</p>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-gray-800'>
          <Slider />
        </div>
      </div>
    </Layout>
  )
}
