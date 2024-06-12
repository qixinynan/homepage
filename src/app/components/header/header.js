import NavItem from './nav-item'
import Avatar from '../common/avatar'
import { tryGetCurrentUser } from '@/app/api/accounts'
import MobileHeader from './mobile-header'


export default async function Header() {
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

  const res = await tryGetCurrentUser();
  const accountName = res.code == 200 ? res.data.username : "请登录";

  return (
    <header className='relative flex flex-row items-center justify-center bg-slate-800 text-gray-50'>
      <MobileHeader headerData={headerData}></MobileHeader>
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