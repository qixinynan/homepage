import { useState } from "react";
import Button from "../components/common/button";
import H2 from "../components/common/h2";
import Input from "../components/common/input";
import Mask from "../components/common/mask"
import { addArchive } from "@/app/api/archives"

export default function Add({ active, onClose }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const clickAddArchive = async () => {
    await addArchive(name, desc);
    location.reload();
  }
  if (active) {
    return (<div>
      <Mask onClick={onClose} ></Mask>
      <div className="max-w-sm fixed bg-slate-50 rounded left-0 right-0 mx-auto top-32 p-5 pb-16 z-40">
        <H2>添加记录</H2>
        <div>
          <label className="mr-1">标题:</label>
          <Input className="w-full" value={name} onChange={(e) => setName(e.target.value)} ></Input>
        </div>
        <div className="mt-2">
          <label className="mr-1">描述:</label>
          <textarea className="w-full border rounded resize-none bg-slate-50 p-1" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
        <div className="absolute bottom-4 right-0 mr-5">
          <Button onClick={clickAddArchive} className="ml-3">添加</Button>
        </div>
      </div >
    </div >)
  }
}