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
          大家好，欢迎在这里认识七夕泥2.0 七夕泥正在广泛勾结团伙，并制作了这个页面浅浅展示自己（）
        </TextMd>
        <TextMd>
          很开心诸位能更了解伟大的七夕泥一分！
        </TextMd>
      </div>
      <Now></Now>
      <H2>属性</H2>
      <DescribeCard title="涉猎">看番、漫画、玩游戏、写代码做些杂七杂八的东西、ACGN系列音乐、哔哩哔哩 乾杯- ( ゜- ゜)つロ！
      </DescribeCard>
      <DescribeCard title="雷点">三观正常、小孩表情包、太抽象的乐子人、认识以后乱删人/拉黑、恶心已读不回，对热情不回应</DescribeCard>
      <DescribeCard title="动漫">特别喜欢日常番\音乐番，孤独摇滚！轻音少女、中二病也要谈恋爱之类的特别喜欢！</DescribeCard>
      <DescribeCard title="最喜欢的音乐">
        {/* <iframe frameborder="no" border="0" width="330" height="86" src="//music.163.com/outchain/player?type=2&id=32431066&auto=1&height=66" /> */}
        《神的随波逐流》
      </DescribeCard>
      <DescribeCard title="游戏">
        <p>P社系列（钢铁雄心、欧陆风云、十字军之王3）、文明6之类的策略游戏游戏</p>
        <p>沙盒生存游戏：例如Minecraft、泰拉瑞亚、Rimworld</p>
        <p>正在尝试怪物猎人但真的好难诶</p>
      </DescribeCard>
      <DescribeCard title="生活">
        生活方面一塌糊涂，高考崩了，人生崩可，我建议最好别问，问就是死了
      </DescribeCard>
      <DescribeCard title="技术力！">
        <p>做网站和游戏都比较擅长、Java、JavaScript、C#都比较熟练、C/C++、Rust、Go属于能凑合用</p>
        <p>React、</p>
      </DescribeCard>

    </section >
  );
}
