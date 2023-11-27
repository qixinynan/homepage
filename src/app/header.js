import NavItem from './nav-item'
import Avatar from './components/avatar'
import MenuIcon from './components/icons/menu-icon'

export default function Header() {
  return (
    <header className='relative flex flex-col items-center justify-center bg-slate-800 text-gray-50'>
      <MenuIcon className='absolute left-5 sm:hidden' fill={'hsl(224, 7.2%, 40%)'} />
      <nav className='inline-flex py-3 px-5 space-x-16'>
        <a href='/' className='inline-flex items-center space-x-2 group'>
          <Avatar className="group-hover:border-2 border-gray-300" size={32}></Avatar>
          <span className='text-lg font-bold'>{"Qixiny"}</span>
        </a>
        <ul className='hidden sm:inline-flex items-center space-x-5 text-sm'>
          <NavItem href={'/updates'}>最近动态</NavItem>
          <NavItem href={'/projects'}>项目们</NavItem>
          <NavItem href={'/blogs'}>博客们</NavItem>
          <NavItem href={'/find'}>搜寻本尊</NavItem>
        </ul>
      </nav>
    </header>
  )
}