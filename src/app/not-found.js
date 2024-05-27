import H2 from './components/common/h2'
import Link from './components/common/link'

export default function NotFound() {
  return (
    <div className='m-5'>
      <H2>找不到此页面！</H2>
      <p className='text-sm text-gray-800 font-mono'>可恶，失算了，竟然找不到此页面！很可能是此页面还未被开发，或者开发者七夕泥太过于愚蠢以至于的bug（但愿是前者）</p>
      <Link className="text-center w-full mt-28" href="/">返回首页</Link>
    </div>
  )
}