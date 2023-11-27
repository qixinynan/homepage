import H2 from "../components/h2"
import ProjectsCard from "./card"

export default function ProjectsPreview() {
  return (
    <section>
      <H2>我的项目</H2>
      <div className="grid grid-flow-col">
        <ProjectsCard title="Remotp" desc="一款远程桌面" cover="https://picx.zhimg.com/v2-c7c6b7624e5b7491a7ce85ff937dce35_b.jpg"></ProjectsCard>
        <ProjectsCard title="libloader" desc="Rust的极易用的动态库加载器" cover=""></ProjectsCard>
        <ProjectsCard title="夕泥网" desc="基于Django + Bootstrap5开发的博客系统，简单易用"></ProjectsCard>

      </div>
      <a className="text-sm float-right text-blue-500 mt-2" href="/projects">查看更多...</a>
    </section>
  )
}