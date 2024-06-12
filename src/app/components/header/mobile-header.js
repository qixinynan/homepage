'use client'
import MobileMenu from './mobile-menu'
import MenuIcon from './menu-icon'
import { useState } from 'react'
export default function MobileHeader({ headerData }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const closeMenu = () => {
    setShowMobileMenu(false)
    location.hash = "";
  }
  return (
    <>
      <MobileMenu active={showMobileMenu} onClose={closeMenu} data={headerData}></MobileMenu>
      <MenuIcon onClick={() => setShowMobileMenu(true)} className='absolute left-5 sm:hidden' fill={'hsl(224, 7.2%, 40%)'} />
    </>
  )
}