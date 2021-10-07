import Link from 'next/link'
import BLOG from '@/blog.config'
import Image from 'next/image'
import { useLocale } from '@/lib/locale'


const headerNavLinks = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/projects', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: false }
]
export default headerNavLinks