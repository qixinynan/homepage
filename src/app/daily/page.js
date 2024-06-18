import Container from "../components/common/container";
import DailyForm from "./daily-form";
import H2 from "../components/common/h2";
import { getTodayDaily } from "../api/daily";
import { isAdmin } from "../common/utils";
import DailyItemForm from "./items-form";
import { redirect } from "next/navigation";

export default async function Daily() {
  if (!(await isAdmin())) {
    redirect("/account");
  }
  const daily = await getTodayDaily()
  const data = daily.data
  return (<Container>
    <H2>每日锐评</H2>
    <DailyForm data={data}></DailyForm>
    <DailyItemForm></DailyItemForm>
  </Container>)
}