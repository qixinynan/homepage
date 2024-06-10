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
import { getTimeString, isLogined } from "../common/utils";
import { useRouter } from 'next/navigation'
import toast from "../common/toast";
export default function Comment() {
  const [showComment, setShowComment] = useState(false)
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([])
  const router = useRouter()
  const clickAddComment = () => {
    if (isLogined()) {
      setShowComment(true)
    }
    else {
      router.push("/account/login")
    }
  }
  const fetchComments = async () => {
    const res = await getComments();
    const data = res.data
    data.reverse()
    setComments(data)
  }
  const clickSendComment = async () => {
    if (content == '') {
      toast("请检查是否填写完整", "warning")
      return;
    }
    await sendComment(content)
    fetchComments();
    setShowComment(false);
  }
  useEffect(() => {
    fetchComments();
  }, [])
  return <div className="mt-5 mx-3">
    <Dialog className="p-8" active={showComment} onClose={() => { setShowComment(false) }}>
      <H2>宣布锐评！</H2>
      <div className="space-y-6">
        <div>
          <TextArea value={content} onChange={(e) => { setContent(e.target.value) }} required className="h-32" placeHolder="锐评の内容 (请勿过于激烈以至于七夕泥先生被吓死)">12</TextArea>
        </div>
        <CardButton onClick={clickSendComment}>锐评！</CardButton>
      </div>
    </Dialog>
    <H2>锐评七夕泥：</H2>
    <CardButton onClick={clickAddComment}>添加评论</CardButton>
    {comments.map((comment, i) => (
      <Card key={i} className="p-3 mt-3">
        <span className="text-blue-500 text-sm">{comment.author.username}：</span>
        <span className="indent-4 mt-1 text-sm">{comment.content}</span>
        <p className="text-end text-xs text-slate-400">{getTimeString(comment.createdAt)}</p>
      </Card>
    ))}
  </div >
}