import Intro from "./home/intro"
import Link from "./components/common/link"
import ShowMenu from "./components/show-menu"
import Comment from "./comment/comment";
import Like from "./home/like";
import H2 from "./components/common/h2";
import CardButton from "./components/common/card-btn";
import BlogList from "./blogs/blog-list";
import Now from "./home/now";
export default function Home() {
  return (<div className="root">
    <Intro></Intro>
    <Like></Like>
    <BlogList></BlogList>
    <Comment></Comment>
    <section className="mt-3 mx-3">
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