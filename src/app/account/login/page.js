'use client';
import { useEffect, useState } from "react"
import H2 from "@/app/components/common/h2";
import Input from "@/app/components/common/input";
import Button from "@/app/components/common/button";
import Link from "@/app/components/common/link";
import { loginUser } from "@/app/api/accounts";
import { useRouter } from 'next/navigation'
import toast from "@/app/common/toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("token")) {

      router.push("/account")
    }
  }, [])

  const login = async () => {
    if (!username || !password) {
      toast("请填写账号与密码", "warning");
    }
    else {
      const res = await loginUser(username, password);
      if (res.code == 200) {
        console.log(res);
        router.push("/")
      }
    }
  }

  return (<div className="mt-5">
    <H2 className="text-center">登录</H2>
    <p className="text-center text-sm">放心，你的账号凭证是完全安全的！</p>
    <div className="w-80 mx-auto mt-10 space-y-5">
      <div className="space-y-3">
        <Input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" placeHolder="用户名"></Input>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" placeHolder="密码"></Input>
      </div>
      <Button className="w-full !mt-10" onClick={login}>登录，启动！</Button>
      <Link href="/account/register">没有账号，往死里注册！</Link>
    </div>
  </div >)
}

export const metadata = {
  title: "登录 - 七夕泥の网站",
};
