'use client'
import NavItem from './nav-item'
import Avatar from '../common/avatar'
import MenuIcon from './menu-icon'
import { useEffect, useState } from 'react'
import MobileMenu from './mobile-menu'
import { isLogined } from '@/app/common/utils'
import { tryGetCurrentUser } from '@/app/api/accounts'


export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const headerData = [
    {
      name: "首页",
      link: "/"
    },
    {
      name: "动态",
      link: "/activities"
    },
    {
      name: "博客们",
      link: "/blogs"
    },
    {
      name: "关于",
      link: "/about"
    },
  ]

  const [accountName, setAccountName] = useState("点击登录");

  useEffect(() => {
    window.addEventListener('hashchange', () => setShowMobileMenu(location.hash === "#menu"))
    tryGetCurrentUser().then(user => setAccountName(user.data.username));
  }, [])

  const closeMenu = () => {
    setShowMobileMenu(false)
    location.hash = "";
  }

  return (
    <header className='relative flex flex-row items-center justify-center bg-slate-800 text-gray-50'>
      <MobileMenu active={showMobileMenu} onClose={closeMenu} data={headerData}></MobileMenu>
      <MenuIcon onClick={() => setShowMobileMenu(true)} className='absolute left-5 sm:hidden' fill={'hsl(224, 7.2%, 40%)'} />
      <nav className='inline-flex py-3 px-5 space-x-16'>
        <a href='/' className='inline-flex items-center space-x-2 group'>
          <Avatar className="group-hover:border-2 border-gray-300" size={32}></Avatar>
          <span className='text-lg font-bold'>{"Qixiny"}</span>
        </a>
        <ul className='hidden sm:inline-flex items-center space-x-5 text-sm'>
          {headerData.map((e, i) => <NavItem key={i} href={e.link}>{e.name}</NavItem>)}
        </ul>
      </nav>
      <a href='/account' className='text-sm hidden sm:inline-flex items-center space-x-2 group absolute right-20'>
        <Avatar src='/images/unknown.jpeg' size={32}></Avatar>
        <span>{accountName}</span>
      </a>
    </header>
  )
}