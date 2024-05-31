import { useEffect, useState } from "react";
import { deleteArchive, editArchive } from "../api/archives";
import Button from "../components/common/button";
import H2 from "../components/common/h2";
import Input from "../components/common/input";
import { getTimeString } from "../common/utils";
import Dialog from "../components/dialog";
import TextArea from "../components/common/textarea";

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

  return (<div>
    <Dialog className="pb-16" onClose={onClose} active={active}>
      <H2>查看档案</H2>
      <div>
        <label className="mr-1">标题:</label>
        <Input required className="w-full" value={name} onChange={(e) => setName(e.target.value)} ></Input>
      </div>
      <div className="mt-2">
        <label className="mr-1">描述:</label>
        <TextArea required value={desc} onChange={(e) => setDesc(e.target.value)}></TextArea>
      </div>
      <p>{getTimeString(createdAt)}</p>
      <div className="absolute bottom-4 right-0 mr-5">
        <Button onClick={clickDeleteArchive} color="red">删除</Button>
        <Button onClick={clickEditArchive} className="ml-3">编辑</Button>
      </div>
    </Dialog>
  </div >)

}