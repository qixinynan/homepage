import Card from "../../app/components/common/card";
import TextMd from "../../app/components/common/text-md";
import Image from "next/image";
import Link from "../components/common/link";

export default function ProjectsCard({ title, desc, cover, link }) {
  return (
    <Card className="h-40 flex flex-1 flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="flex-grow object-cover w-100 h-10" alt={title} src={cover}></img>
      <div className="">
        <Link href={link}>{title}</Link>
        <TextMd color="text-gray-500" className="truncate">{desc}</TextMd>
      </div>
    </Card>
  )
}