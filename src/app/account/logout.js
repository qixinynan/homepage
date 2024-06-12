'use client'
import Link from "../components/common/link"
import cookies from "react-cookies"
import { useRouter } from "next/navigation"
export default function LogoutBtn() {
  const router = useRouter()
  const logout = () => {
    cookies.remove("token");
    localStorage.removeItem("token");
    router.push("/account/login")
  }
  return <Link onClick={logout}>退出登录</Link>
}