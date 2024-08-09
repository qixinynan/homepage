import Avatar from "../components/common/avatar";
import H2 from "../components/common/h2";
import SpanCard from "../components/common/span-card";
import TextMd from "../components/common/text-md";
import DescribeCard from "./describe-card";
import Now from "./now";

export default function Intro() {
  return (
    <section className="space-y-4 rounded-lg px-4">
      {/* <div className="before:bg-[url('/images/header.jpg')] before:blur before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-blue-50"></div> */}
      <div className="flex justify-start items-center relative h-32">
        <Avatar className="z-10" size={64} />
        <div className="z-10 flex flex-col ml-12">
          <h1 className="text-2xl font-bold font-sans">Qixiny Nan</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            七夕泥，乐观的无病呻吟的典型代表
          </p>
        </div>
      </div>
      <div>
        <SpanCard>
          其它的名字: Qixiny, Qixines, 七夕泥
        </SpanCard>
      </div>
      <div>
        <TextMd>
          这里是新七夕泥！喜欢各种没有用的东西，可能就是如此所以做了这么一个没有用的网站吗？这里可能有一些我的文章、项目、还有大家的评论？
        </TextMd>
        <TextMd>
          很开心诸位能更了解伟大的七夕泥一分！
        </TextMd>
      </div>
      <Now></Now>
      <DescribeCard title="爱好">看番、漫画、玩游戏、写代码做些杂七杂八的东西、ACGN系列音乐、哔哩哔哩 乾杯- ( ゜- ゜)つロ！
      </DescribeCard>
    </section >
  );
}
