'use client'
import Link from "../components/common/link"
import cookies from "react-cookies"
export default function LogoutBtn() {
  const logout = () => {
    cookies.remove("token");
    localStorage.removeItem("token");
    location.href = "/account/login"
  }
  return <Link onClick={logout}>退出登录</Link>
}