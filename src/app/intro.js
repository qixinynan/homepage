import Avatar from "./components/avatar";
import SpanCard from "./components/span-card";
import TextMd from "./components/text-md";

export default function Intro() {
  return (
    <section className="space-y-4 rounded-lg px-4">
      {/* <div className="before:bg-[url('/images/header.jpg')] before:blur before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-blue-50"></div> */}
      <div className="flex justify-start items-center relative h-32">
        <Avatar className="z-50" size={64} />
        <div className="z-50 flex flex-col ml-12">
          <h1 className="text-2xl font-bold font-sans">Qixiny Nan</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            七夕泥，伟大至极者
          </p>
        </div>
      </div>
      <div>
        <SpanCard>
          其它的名字: Qixiny, Qixines, 七夕泥, 冰川一号, 量子同学
        </SpanCard>
      </div>
      <div>
        <TextMd>
          欢迎光临～里面请！我是伟大的七夕泥，一名至尊的开发者，一名伟大的二次元及被卑微的游戏爱好者，欢迎来到本尊的至尊大网站！
        </TextMd>
      </div>
    </section>
  );
}
