import Intro from "./about/intro"
import Link from "./components/common/link"
import ShowMenu from "./components/show-menu"
import Comment from "./comment/comment";
import Like from "./home/like";
import H2 from "./components/common/h2";
import Card from "./components/common/card";
import CardButton from "./components/common/card-btn";
export default function Home() {
  return (<div>
    <Intro></Intro>
    <Like></Like>
    <Comment></Comment>
    <section className="mx-3">
      <H2>工具</H2>
      <a href="/tools/wrap">
        <CardButton>
          {`跳转URL生成 >`}
        </CardButton>
      </a>

    </section>
    <ShowMenu>
      <Link className="mt-10 ml-4">查看更多</Link>
    </ShowMenu>

  </div>)
}