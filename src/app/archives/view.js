'use client'
import H2 from "../components/common/h2";
import { formatDate } from "../common/utils";
import Editor from "./editor";
import Add from './add'
import { useEffect, useState } from "react";
import Button from "../components/common/button";
import { getArchives } from "../api/archives";
import ArchiveCard from "./archive-card";
import Rate from "./rate";

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
  return (<div className="root space-y-3 mx-10 mt-3">
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