"use client";
import Card from "../components/common/card"
import H2 from "../components/common/h2"
import Button from "../components/common/button"
import Dialog from "@/app/components/dialog"
import { useEffect, useState } from "react"
import Input from "../components/common/input";
import TextArea from "../components/common/textarea";
import CardButton from "../components/common/card-btn";
import { getComments, sendComment } from "../api/comment";
import { getTimeString } from "../common/utils";
export default function Comment() {
  const [showComment, setShowComment] = useState(false)
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([])
  const cliclSendComment = async () => {
    if (username == '' || content == '') {
      alert("请检查是否填写完成")
      return;
    }
    await sendComment(username, content)
    location.reload();
  }
  useEffect(() => {
    const fetchComments = async () => {
      const res = await getComments();
      const data = res.data
      data.reverse()
      setComments(data)
    }
    fetchComments();
  }, [])
  return <div className="mt-5 mx-3">
    <Dialog className="p-8" active={showComment} onClose={() => { setShowComment(false) }}>
      <H2>宣布锐评！</H2>
      <div className="space-y-6">
        <div>
          <label className="mr-1">昵称:</label>
          <Input className="w-full" value={username} onChange={(e) => { setUsername(e.target.value) }} required placeHolder="昵称"></Input>
        </div>
        <div>
          <TextArea value={content} onChange={(e) => { setContent(e.target.value) }} required className="h-32" placeHolder="锐评の内容 (请勿过于激烈以至于七夕泥先生被吓死)">12</TextArea>
        </div>
        <CardButton onClick={cliclSendComment}>锐评！</CardButton>
      </div>
    </Dialog>
    <H2>锐评七夕泥：</H2>
    <CardButton onClick={() => { setShowComment(true) }}>添加评论</CardButton>
    {comments.map((comment, i) => (
      <Card key={i} className="p-3 mt-3">
        <p className="text-slate-700 text-sm">{comment.username}：</p>
        <p className="indent-4 mt-1 text-sm">{comment.content}</p>
        <p className="text-end text-xs text-slate-400">{getTimeString(comment.createdAt)}</p>
      </Card>
    ))}
  </div >
}