'use client';
import { useState } from "react"
import H2 from "@/app/components/common/h2";
import Input from "@/app/components/common/input";
import Button from "@/app/components/common/button";
import Link from "@/app/components/common/link";
import toast from "@/app/common/toast";
import { registerUser } from "@/app/api/accounts";
import { useRouter } from "next/navigation"


export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const router = useRouter()
  const register = async () => {
    if (!password || !username || !repassword) {
      toast("请确认填写完整", "warning")
    }
    else if (password != repassword) {
      toast("两次输入的密码不一致", "warning");
    }
    else {
      const res = await registerUser(username, password);
      if (res.code == 200) {
        router.push("/account/login")
      }
      console.log(res);
    }
  }

  return (<div className="mt-5">
    <H2 className="text-center">注册</H2>
    <p className="text-center text-sm">放心，你的账号凭证是完全安全的！</p>
    <div className="w-80 mx-auto mt-10 space-y-5">
      <div className="space-y-3">
        <Input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" placeHolder="用户名"></Input>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" placeHolder="密码"></Input>
        <Input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} className="w-full" placeHolder="确认密码"></Input>
      </div>
      <Button onClick={register} className="!mt-10 w-full">骄傲地宣布注册</Button>
      <Link href="/account/login">已经有账号了，登录，启动！</Link>
    </div>
  </div >)
}
export const metadata = {
  title: "注册 - 七夕泥の网站",
};
