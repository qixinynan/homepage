import { useState } from "react";
import Button from "../components/common/button";
import H2 from "../components/common/h2";
import Input from "../components/common/input";
import { addArchive } from "@/app/api/archives"
import Dialog from "../components/dialog";
import TextArea from "../components/common/textarea";

export default function Add({ active, onClose }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const clickAddArchive = async () => {
    await addArchive(name, desc);
    location.reload();
  }
  return (<div>
    <Dialog className="pb-16" onClose={onClose} active={active}>
      <H2>添加记录</H2>
      <div>
        <label className="mr-1">标题:</label>
        <Input required className="w-full" value={name} onChange={(e) => setName(e.target.value)} ></Input>
      </div>
      <div className="mt-2">
        <label className="mr-1">描述:</label>
        <TextArea required value={desc} onChange={(e) => setDesc(e.target.value)}></TextArea>
      </div>
      <div className="absolute bottom-4 right-0 mr-5">
        <Button onClick={clickAddArchive} className="ml-3">添加</Button>
      </div>
    </Dialog>
  </div >)
}
