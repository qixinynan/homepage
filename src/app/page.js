import Intro from "./about/intro"
import Link from "./components/common/link"
import ShowMenu from "./components/show-menu"
export default function Home() {
  console.log("node env is", process.env.NODE_ENV);
  return (<div>
    <Intro></Intro>
    <ShowMenu>
      <Link className="mt-10 ml-4">查看更多</Link>
    </ShowMenu>

  </div>)
}