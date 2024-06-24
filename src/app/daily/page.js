import Container from "../components/common/container";
import DailyForm from "./daily-form";
import H2 from "../components/common/h2";
import { getDaily, getDailyItems, getTodayDaily } from "../api/daily";
import { isAdmin } from "../common/utils";
import DailyItemForm from "./items-form";
import { redirect, useSearchParams } from "next/navigation";
import Button from "../components/common/button";
import DateInput from "./date-input";
import moment from "moment";

export default async function Daily({ searchParams }) {
  if (!(await isAdmin())) {
    redirect("/account");
  }
  console.log(searchParams)
  const date = searchParams.date ? new Date(searchParams.date) : new Date();

  const daily = await getDaily(date)
  const items = await getDailyItems(date)

  return (<Container>
    <H2>每日锐评</H2>
    <DateInput defaultValue={searchParams.date}></DateInput>
    <DailyForm data={daily.data}></DailyForm>
    <DailyItemForm data={items.data}></DailyItemForm>
  </Container>)
}

export async function generateMetadata({ searchParams }) {
  const date = searchParams.date ? new Date(searchParams.date) : new Date();
  const m = moment(date)
  const dateStr = m.format("YYYY年MM月DD");
  return {
    title: `${dateStr}锐评 - 七夕泥の网站`,
  };
}
