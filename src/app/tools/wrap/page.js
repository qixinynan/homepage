'use client';
import CardButton from "@/app/components/common/card-btn";
import H2 from "@/app/components/common/h2";
import Input from "@/app/components/common/input";
import Link from "@/app/components/common/link";
import { useState } from "react";

export default function Wrap() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState("")
  return <div className="max-w-md mx-auto block mt-10 space-y-10">
    <H2>跳转URL生成</H2>
    <div className="flex space-x-2 items-center">
      <label>URL:</label>
      <Input value={url} onChange={(e) => { setUrl(e.target.value) }} className="w-full" placeHolder="https://..."></Input>
    </div>
    <CardButton onClick={() => {
      setResult(`https://wrap.qixiny.net/go?url=${encodeURI(url)}`)
    }}>生成</CardButton>
    <div>
      <p>结果：</p>
      <Link href={result}>{result}</Link>
    </div>
  </div>
}