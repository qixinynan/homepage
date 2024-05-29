import { useEffect, useState } from "react";
import { deleteArchive, editArchive } from "../api/archives";
import Button from "../components/common/button";
import H2 from "../components/common/h2";
import Input from "../components/common/input";
import Mask from "../components/common/mask";
import { getTimeString } from "../common/utils";

export default function Editor({ active, data, onClose }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('')
  const [createdAt, setCreatedAt] = useState(Date.now())
  useEffect(() => {
    if (data) {
      setName(data.name);
      setDesc(data.description)
      // setCreatedAt(data.createdAt)
    }
  }, [data])
  const clickDeleteArchive = async () => {
    await deleteArchive(data.id)
    location.reload();
  }
  const clickEditArchive = async () => {
    await editArchive(data.id, name, desc)
  }
  if (active) {
    return (<div>
      <Mask onClick={onClose} ></Mask>
      <div className="max-w-sm fixed bg-slate-50 rounded left-0 right-0 mx-auto top-32 p-5 pb-16 z-40">
        <H2>查看档案</H2>
        <div>
          <label className="mr-1">标题:</label>
          <Input className="w-full" value={name} onChange={(e) => setName(e.target.value)} ></Input>
        </div>
        <div className="mt-2">
          <label className="mr-1">描述:</label>
          <textarea className="w-full border rounded resize-none bg-slate-50 p-1" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
        <p>{getTimeString(createdAt)}</p>
        <div className="absolute bottom-4 right-0 mr-5">
          <Button onClick={clickDeleteArchive} color="red">删除</Button>
          <Button onClick={clickEditArchive} className="ml-3">编辑</Button>
        </div>
      </div >
    </div >)
  }
}