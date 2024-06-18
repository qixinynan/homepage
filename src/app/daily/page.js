import Container from "../components/common/container";
import DailyForm from "./daily-form";
import H2 from "../components/common/h2";
import { getTodayDaily } from "../api/daily";
import DailyItemForm from "./items-form";


export default async function Daily() {
  const daily = await getTodayDaily()
  const data = daily.data
  return (<Container>
    <H2>每日锐评</H2>
    <DailyForm data={data}></DailyForm>
    <DailyItemForm></DailyItemForm>
  </Container>)
}