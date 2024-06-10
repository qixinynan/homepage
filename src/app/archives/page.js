'use client';
import { useEffect, useState } from "react";
import H2 from "../components/common/h2";
import StatusCard from "../components/status-card";
import cookies from 'react-cookies'
import Link from "../components/common/link";
import { formatDate } from "../common/utils";
import Editor from "./editor";
import Add from './add'
import Button from "../components/common/button";
import { getArchives } from "../api/archives";
import ArchiveCard from "./archive-card";
import Dialog from "../components/dialog";
import Rate from "./rate";
import { getCurrentUser } from "../api/accounts";
import { useRouter } from "next/navigation";

export default function Archives() {
  const [hasAuth, setHasAuth] = useState(undefined);
  const router = useRouter();
  useEffect(() => {
    getCurrentUser().then((data) => {
      console.log(data, data.data.role)
      setHasAuth(data.data.role == "ADMIN")
      // if (!hasAuth) {
      //   router.push('/')
      // }
    })
  }, [])
  if (hasAuth === true) {
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
  const [showEditor, setShowEditor] = useState(false)
  const [showRate, setShowRate] = useState(false)
  const fetchArchieves = async () => {
    const res = await getArchives();
    const data = res.data
    data.reverse()
    setArchives(data)

  }

  useEffect(() => {
    fetchArchieves();
  }, [])
  return (<div className="space-y-3 mx-10 mt-3">
    <Rate active={showRate} data={archives[selectedId]} onRate={fetchArchieves} onClose={() => setShowRate(false)}></Rate>
    <Add active={showAdd} onClose={() => setShowAdd(false)} ></Add>
    <Editor active={showEditor} data={archives[selectedId]} onClose={() => { setShowEditor(false); setSelectedId(-1) }}></Editor>

    <Button onClick={() => setShowAdd(true)}>添加</Button>
    <H2>我的档案</H2>
    {archives.map((archive, i) => (
      <ArchiveCard
        onClick={() => { setSelectedId(i); setShowEditor(true) }}
        key={i}
        onRate={() => { setSelectedId(i); setShowRate(true) }}
        title={archive.name}
        rate={archive.rate}
        time={formatDate(archive.createdAt)} desc={archive.description}></ArchiveCard>
    ))}
  </div>)
}