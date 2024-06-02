import { getTimeString } from "../common/utils";
import Card from "../components/common/card";
import Link from "../components/common/link";
import Dialog from "../components/dialog";

/**
 * 几种状况
 * 1. 不支持锐评
 * 2. 发表时已评
 * 3. 请评
 * 4. 回应请评 
 * */

function RateContent({ rate, onRate }) {
  if (rate) {
    return (<div className="text-xs my-2">
      <p className="text-sm text-slate-600 font-bold italic">锐评:</p>
      <div className="text-slate-400 italic indent-2">
        <p>评分: {rate.rate}/10</p>
        <p>内容: {rate.content}</p>
        <p>锐评时间: {getTimeString(rate.createdAt)}</p>
      </div>
    </div>)
  }
}
export default function ArchiveCard({ title, time, desc, rate, onClick, onRate }) {
  return <Card className="p-4">
    <p className="text-base font-bold text-slate-800">{title}</p>
    <p className="text-sm mt-0 text-slate-600">{desc}</p>
    <RateContent rate={rate}></RateContent>
    <p className="text-xs text-end mt-1 text-slate-400">{time}</p>
    <div className="flex space-x-3">
      <Link onClick={onClick}>编辑</Link>
      <Link onClick={onRate}>锐评</Link>
    </div>
  </Card>
}