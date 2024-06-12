import { getCurrentUser } from "../api/accounts"
import H2 from "../components/common/h2"
import Container from "../components/common/container"
import LogoutBtn from "./logout";
import { isLogined } from "../common/utils";
import { redirect } from "next/navigation";

export default async function Account() {
  if (!isLogined()) {
    redirect("/account/login");
  }
  const res = await getCurrentUser();
  const userData = res.data;

  return (
    <Container classname="space-y-3">
      <H2>个人资料</H2>
      <p>用户名：{userData.username}</p>
      <p>注册日期：{userData.createdAt}</p>
      <LogoutBtn></LogoutBtn>
    </Container>
  )
}

export const metadata = {
  title: "账号 - 七夕泥の网站",
}