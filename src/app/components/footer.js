import Link from "./common/link";

export default function Footer() {
  return (<footer className="mt-24 mb-10 text-xs text-gray-400 text-center font-mono">
    <p >QixinyNet - 七夕泥の网站 VERSION 1.3.2
      <Link className="text-xs text-gray-400 underline mx-1" href="/admin">管理</Link>
      <Link className="text-xs text-gray-400 underline mx-1" href="/archives">档案</Link>
    </p>
    <p >Copyright © 2023-2024 QixinyNet</p>
    <p >由七夕泥开发 联系方式：qixinynan@gmail.com</p>
  </footer>)
}