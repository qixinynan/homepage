import H2 from "@/app/components/common/h2";
import LoginForm from "./login-form";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
export default function Login() {


  const token = cookies().get('token');
  // 如果存在token，则重定向到账号页面
  if (token) {
    redirect('/account');
  }

  return (<div className="mt-5">
    <H2 className="text-center">登录</H2>
    <p className="text-center text-sm">放心，你的账号凭证是完全安全的！</p>
    <LoginForm></LoginForm>
  </div >)
}

export const metadata = {
  title: "登录 - 七夕泥の网站",
}