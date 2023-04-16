import Link from 'next/link'
import React, { useState } from 'react'

const Layout = ({ children }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <Link href='/'>
              My Portfolio
              </Link>
              </span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
          </div>
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <Link href="/">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                  HOME
                </span>
              </Link>
              <Link href="/component/Blog">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                  BLOG
                </span>
              </Link>
              <Link href="/component/PortfolioItem">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                  SITE
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout;
