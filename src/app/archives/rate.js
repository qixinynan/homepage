import H2 from "../components/common/h2"
import Dialog from "../components/dialog"
import Input from "../components/common/input"
import { useState } from "react"
import CardButton from "../components/common/card-btn"
import { rateArchive } from "../api/archives"
export default function Rate({ active, data, onClose, onRate }) {
  const [content, setContent] = useState("")
  const [rate, setRate] = useState("");

  const clickRate = async () => {
    await rateArchive(data.id, content, String(rate))
    onRate();
    onClose();
  }

  return <Dialog active={active} onClose={onClose}>
    <H2>锐评</H2>
    <div>
      <label className="mr-1">内容:</label>
      <Input required className="w-full" value={content} onChange={(e) => setContent(e.target.value)} ></Input>
    </div>
    <div className="mt-2">
      <label className="mr-1">评分:</label>
      <Input type="number" max="5" min="0" className="w-full" required value={rate} onChange={(e) => setRate(e.target.value)}></Input>
    </div>
    <CardButton onClick={clickRate} className="mt-10">锐评</CardButton>
  </Dialog>
}
