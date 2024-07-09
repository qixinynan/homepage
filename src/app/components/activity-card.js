import H3 from "./common/h3";
import Card from "./common/card";
import TextMd from "./common/text-md";

export default function ActivityCard({ time, title, desc, onClick, className }) {
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
      </TextMd>
      {/* <div className="mt-5 text-xs">回复：
        <p className="indent-5">
          <span className="text-blue-500">匿名人士</span>
          <span>:</span>
          <span className="ml-2">我不这么喜欢</span>
        </p>
      </div> */}
    </Card>
  )
}