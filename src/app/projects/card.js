import Card from "../components/card";
import TextMd from "../components/text-md";
import Image from "next/image";

export default function ProjectsCard({ title, desc, cover }) {
  return (
    <Card className="w-40 h-40 flex flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="flex-grow object-cover" alt={title} src={cover}></img>
      <div className="">
        <TextMd color="text-blue-500">{title}</TextMd>
        <TextMd color="text-gray-500" className="truncate">{desc}</TextMd>
      </div>
    </Card>
  )
}