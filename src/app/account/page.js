'use client'
import { useEffect, useState } from "react"
import { getCurrentUser } from "../api/accounts"
import H2 from "../components/common/h2"
import Container from "../components/common/container"
import Link from "../components/common/link"
import toast from "../common/toast"
import { useRouter } from "next/navigation"

export default function Account() {
  const [userData, setUserData] = useState({})
  const router = useRouter()
  useEffect(() => {
    getCurrentUser().then(res => {
      setUserData(res.data);
    })
  }, [])

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/account/login")
  }

  return (
    <Container classname="space-y-3">
      <H2>个人资料</H2>
      <p>用户名：{userData.username}</p>
      <p>注册日期：{userData.createdAt}</p>
      <Link onClick={logout}>退出登录</Link>
    </Container>
  )
}