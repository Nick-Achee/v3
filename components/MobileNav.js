/* eslint-disable */
import useState from "react"
import Link from 'next/link'
import BLOG from '@/blog.config'
import Image from 'next/image'
import { useLocale } from '@/lib/locale'
import ThemeSwitch from "./ThemeSwitch"



const MobileNav = () => {
const [navShow, setNavShow] = useState(false)
const locale = useLocale()
const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/projects', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: false }
  ]


  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed w-full h-1/2 pt-16 rounded-lg text-center	 shadow-xl right-0 bg-gray-300 dark:bg-gray-800  opacity-95 z-40 transform ease-in-out duration-300 ${
          navShow ? 'scale-75	' : 'scale-0	'
        }`}
      >
        <button
          type="button"
          className="fixed w-full h-full hidden cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="	 mt-8">
          {links((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-3xl p-4 font-bold tracking-widest text-gray-900  hover: text-white dark:text-gray-100 hover:bg-gray-500"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
