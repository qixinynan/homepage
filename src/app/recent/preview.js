import H2 from "../../app/components/common/h2";
import Card from "../../app/components/common/card";
import RecentCard from "../components/status-card";
import Link from "../components/common/link";

export default function RecentPreview() {
  return (
    <section>
      <H2>七夕泥的动态</H2>
      <div className="space-y-3">
        <RecentCard title="一定要继续开发" time="未来" desc="现在，这个网站只是静态页面，所有数据不会变化，请等待我高考完成，把一切解冻！（哇～好励志诶！）"></RecentCard>
        <RecentCard title="或许接入GPT?" time="现在" desc="不知道得..."></RecentCard>
        <RecentCard title="重新开发！" time="2024年5月24日" desc="虽然高考越来越近了，但是一个周末突然看到之前的东西，觉得一定得让这个网站能够访问吧！之前可是花了那么多的努力让这个网站变得相对好看得"></RecentCard>
        <RecentCard title="暂停开发" time="2023年7月" desc="高考...被迫停止开发"></RecentCard>
        <RecentCard title="开始开发此网站" time="2023年5月" desc="很多大佬都有个人网站共享自己做的东西，我也得要一个互联网的栖息地"></RecentCard>
        <Link className="float-right" href="/Recent">查看更多...</Link>
      </div>
    </section>
  )
}