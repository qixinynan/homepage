import H2 from "@/app/components/common/h2";
import RegisterForm from "./register-form";

export default function Register() {

  return (<div className="root mt-5">
    <H2 className="text-center">注册</H2>
    <p className="text-center text-sm">放心，你的账号凭证是完全安全的！</p>
    <RegisterForm></RegisterForm>
  </div >)
}

export const metadata = {
  title: "注册 - 七夕泥の网站",
}