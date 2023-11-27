import H2 from "../components/h2";
import Card from "../components/card";
import UpdatesCard from "./card";

export default function UpdatesPreview() {
  return (
    <section>
      <H2>我的动态</H2>
      <div className="space-y-3">
        <UpdatesCard title="个人网站制作完成" time="两天后" desc="很成功！"></UpdatesCard>
        <UpdatesCard title="开始制作个人网站" time="三天前" desc="太失败"></UpdatesCard>
        <UpdatesCard title="启动Remotop项目" time="1个月前" desc="使用Qt6 + QML开发的远程快捷命令app"></UpdatesCard>
        <a className="text-sm float-right text-blue-500" href="/updates">查看更多...</a>
      </div>
    </section>
  )
}