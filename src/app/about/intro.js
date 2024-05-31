import Avatar from "../components/common/avatar";
import SpanCard from "../components/common/span-card";
import TextMd from "../components/common/text-md";

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
          大家好！这里是伟大的七夕泥，自我介绍一向是一个很难的玩意儿，总之大概能看到这个网站的人都是认识我的人罢，所以也没什么可bb的。总之七夕泥万岁，等我高考完了再把这玩意儿弄得好看得不得了吧！
        </TextMd>
        <TextMd>
          忽然发现这个网站毫无意义诶...为的是一年前奋力开发的成果，不过依旧很好看，至少能展示七夕泥可怕的技术力！
        </TextMd>
      </div>
    </section>
  );
}
