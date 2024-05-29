import H3 from "./common/h3";
import Card from "./common/card";
import TextMd from "./common/text-md";

export default function StatusCard({ time, title, desc, onClick, className }) {
  return (
    <Card onClick={onClick} className={className}>
      <TextMd>
        <span className="">{time}, </span>
        <span className="font-bold">{title}</span>
        {desc != undefined &&
          <>
            <span>: </span>
            <span className="italic text-gray-500">{desc}</span>
          </>
        }
        {/* <span className="">三天前, </span>
        <span className="font-bold">开始制作个人主页: </span>
        <span className="italic text-gray-500">正在加紧开发自己的个人网站啦！之前的博客似乎要荒废掉了，这次选用了React + Next，预备部署到Vercel上！</span> */}
      </TextMd>
    </Card>
  )
}