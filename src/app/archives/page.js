'use client';
import { useEffect, useState } from "react";
import H2 from "../components/common/h2";
import StatusCard from "../components/status-card";
import Auth, { isAuth, clearAuth } from "./auth";
import cookies from 'react-cookies'
import Link from "../components/common/link";
import { formatDate } from "../common/utils";
import Editor from "./editor";
import Add from './add'
import Button from "../components/common/button";
import { getArchives } from "../api/archives";


export default function Archives() {
  const [hasAuth, setHasAuth] = useState(undefined);
  useEffect(() => {
    isAuth().then((n) => {
      setHasAuth(n)
      console.log("set to", n)
    })
  }, [])
  if (hasAuth === false) {
    return <Auth></Auth>
  }
  else if (hasAuth === true) {
    return <ArchivesView></ArchivesView>
  }
  else {
    return (<div className="mt-10 rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-500 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-500 rounded col-span-2"></div>
              <div className="h-2 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-500 rounded"></div>
            <div className="space-y-3" />
            <div className="h-2 bg-slate-500 rounded"></div>
            <div className="space-y-10 grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-500 rounded col-span-2"></div>
              <div className="h-2 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-500 rounded"></div>
            <div className="h-2 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export function ArchivesView() {
  const [archives, setArchives] = useState([])
  const [selectedId, setSelectedId] = useState(-1)
  const [showAdd, setShowAdd] = useState(false)
  useEffect(() => {
    const fetchArchieves = async () => {
      const res = await getArchives();
      const data = (await res.json()).data
      console.log("data is ", data);
      data.reverse()
      setArchives(data)
    }
    fetchArchieves();
  }, [])
  return (<div className="space-y-3 mx-10 mt-3">
    <Button onClick={() => setShowAdd(true)}>添加</Button>
    <Add active={showAdd} onClose={() => setShowAdd(false)} ></Add>
    <Editor active={selectedId != -1} data={archives[selectedId]} onClose={() => setSelectedId(-1)}></Editor>
    <H2>我的档案</H2>
    {archives.map((archive, i) => (
      <StatusCard className="cursor-pointer" onClick={() => setSelectedId(i)} key={i} title={archive.name} time={formatDate(archive.createdAt)} desc={archive.description}></StatusCard>
    ))}
    <Link onClick={clearAuth} className="float-right px-10 cursor-pointer">清除验证</Link>
  </div>)
}