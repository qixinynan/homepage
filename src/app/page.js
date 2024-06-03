import Intro from "./about/intro"
import Link from "./components/common/link"
import ShowMenu from "./components/show-menu"
import Comment from "./comment/comment";
import Like from "./home/like";
export default function Home() {
  return (<div>
    <Intro></Intro>
    <Like></Like>
    <Comment></Comment>
    <ShowMenu>
      <Link className="mt-10 ml-4">查看更多</Link>
    </ShowMenu>

  </div>)
}