import H2 from "../../app/components/common/h2"
import Link from "../components/common/link"
import ProjectsCard from "./card"

export default function ProjectsPreview() {
  return (
    <section>
      <H2>七夕泥的项目</H2>
      <div className="grid grid-cols-3 gap-4">
        <ProjectsCard title="Remotp" desc="一款远程桌面App（开发中，已搁置）" cover="https://picx.zhimg.com/v2-c7c6b7624e5b7491a7ce85ff937dce35_b.jpg"></ProjectsCard>
        <ProjectsCard title="libloader" desc="Rust的极易用的动态库加载器" cover="https://crates.io/assets/cargo.png" link="https://crates.io/crates/libloader"></ProjectsCard>
        <ProjectsCard title="夕泥网" desc="基于Django + Bootstrap5开发的博客系统，简单易用" cover="https://avatars.githubusercontent.com/u/31797438?s=48&v=4" link="https://github.com/qixinynan/blog"></ProjectsCard>

      </div>
      <Link className="float-right mt-2" href="/projects">查看更多...</Link>
    </section>
  )
}