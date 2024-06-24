"use client";
import TextArea from "../components/common/textarea";
import UnderlineInput from "../components/common/underline-input";
import Rate from "../components/common/rate";
import CardButton from "../components/common/card-btn";
import ExpandIcon from "./expand-icon";
import { useState } from "react";
import { postDaily } from "../api/daily";
import toast from "../common/toast";
import { formatDate, isEmptyObject } from "../common/utils";

export default function DailyForm({ data }) {
  const [showEditor, setShowEditor] = useState(isEmptyObject(data))
  const clickExpand = () => {
    if (!isEmptyObject(data)) {
      setShowEditor(!showEditor)
    }
    else {
      toast("今日还没有锐评", "warning")
    }
  }
  return (<div>
    {!showEditor && <DailyView data={data} />}
    <div onClick={clickExpand}>
      <ExpandIcon className={`block mx-auto mt-2 ${showEditor && 'rotate-180'}`}></ExpandIcon>
    </div>
    {showEditor && <DailyEditor data={data} />}
  </div>)
}

function DailyView({ data }) {
  console.log(data)
  return (<div className="border rounded p-5">
    <Rate score={data.score}></Rate>
    <p className="text-slate-900 font-bold text-lg">{data.title}</p>
    <p className="text-slate-500 text-sm">{formatDate(data.createdAt).split(' ')[0]}</p>
    <p className="mt-1 text-slate-700">{data.description}</p>
  </div>)
}

function DailyEditor({ data }) {
  const safeData = data || {};
  const [score, setScore] = useState(safeData.score ?? 0)
  const [title, setTitle] = useState(safeData.title ?? '')
  const [description, setDescrption] = useState(safeData.description ?? '')
  const clickPostDaily = async () => {
    if (score <= 0 | score > 5) {
      toast("分数必须在1～5之间", "danger");
      return;
    }
    const res = await postDaily(title, description, score);
    if (res.code == 200) {
      toast("编辑成功");
      location.reload();
    }
  }
  return (<div>
    <Rate size={10} className="my-3" score={score} setScore={(i) => setScore(i)}></Rate>
    <UnderlineInput value={title} onChange={(e) => setTitle(e.target.value)} placeHolder="标题..."></UnderlineInput>
    <TextArea value={description} onChange={(e) => setDescrption(e.target.value)} className="focus:outline-none bg-white mt-3 h-24" placeHolder="描述..."></TextArea>
    <CardButton onClick={clickPostDaily}>确认</CardButton>
  </div>)
}