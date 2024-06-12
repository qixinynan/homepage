'use client'
import Input from "@/app/components/common/input";
import Button from "@/app/components/common/button";
import Link from "@/app/components/common/link";
import { loginUser } from "@/app/api/accounts";
import { useRouter } from 'next/navigation'
import { useState } from "react"
import cookies from 'react-cookies'
import toast from "@/app/common/toast";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const login = async () => {
    if (!username || !password) {
      toast("请填写账号与密码", "warning");
    }
    else {
      const res = await loginUser(username, password);
      if (res.code == 200) {
        console.log(res.data);
        cookies.save('token', res.data, {
          path: '/', maxAge: 1000000
        })
        router.push("/")
      }
    }
  }
  return (<div className="w-80 mx-auto mt-10 space-y-5">
    <div className="space-y-3">
      <Input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" placeHolder="用户名"></Input>
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" placeHolder="密码"></Input>
    </div>
    <Button className="w-full !mt-10" onClick={login}>登录，启动！</Button>
    <Link href="/account/register">没有账号，往死里注册！</Link>
  </div>)
}