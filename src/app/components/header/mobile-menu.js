import Avatar from "../common/avatar"
import Mask from "../common/mask"

function MobileMenuItem({ children, href }) {
  return <a href={href}><div className="z-50 border-b-slate-100 border-b text-gray-800 p-2">{children}</div></a>
}

export default function MobileMenu({ active, onClose, data }) {
  return <div className='block sm:hidden'>
    {/* <div onClick={onClose} className={`fixed w-screen h-screen top-0 left-0 bg-black opacity-70 z-30 ${active ? '' : 'hidden'}`}></div> */}
    <Mask onClick={onClose} className={`${active ? '' : 'hidden'}`}></Mask>
    <div className={`fixed w-80 h-screen top-0 -left-80 bg-slate-200 p-2 z-40 transition ease-in-out duration-300 ${active ? 'translate-x-80' : ''}`}>
      <a href="/">
        <div className="rounded bg-white p-3 flex flex-row items-center" >
          <Avatar size={48}></Avatar>
          <p className="text-gray-800 ml-2 text-lg font-bold">七夕泥の网站</p>
        </div>
      </a>
      <div className="rounded bg-white mt-2">
        {data.map((e, i) => <MobileMenuItem key={i} href={e.link}>{e.name}</MobileMenuItem>)}
      </div>
    </div>
  </div>
}
