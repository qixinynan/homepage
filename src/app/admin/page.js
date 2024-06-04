"use client";
import H2 from "../components/common/h2"
import { deleteComment, getComments, sendComment } from "../api/comment";
import Card from "../components/common/card";
import { useEffect, useState } from "react"
import { getTimeString } from "../common/utils";
import Button from "../components/common/button";
import { isAuth } from "../archives/auth";
import Input from "../components/common/input";
import TextArea from "../components/common/textarea";
import CardButton from "../components/common/card-btn";
import { postBlog } from "../api/blog";
import Toastify from 'toastify-js'

export default function Admin() {
  const [hasAuth, setHasAuth] = useState(undefined)
  useEffect(() => {
    isAuth().then((n) => {
      setHasAuth(n)
    })
  })
  if (hasAuth === false) {
    return <Auth></Auth>
  }
  else {
    return <AdminView></AdminView>
  }
}

export function AdminView() {
  const [comments, setComments] = useState([])
  const fetchComments = async () => {
    const res = await getComments();
    const data = res.data
    data.reverse()
    setComments(data)
  }
  useEffect(() => {
    fetchComments();
  }, [])

  const clickDeleteComment = async (id) => {
    await deleteComment(id);
    await fetchComments();
  }

  return <div className="mt-5">
    <section>
      <H2>评论管理</H2>
      {comments.map((comment, i) => (
        <Card key={i} className="p-3 mt-3">
          <p className="text-slate-700 text-sm">{comment.username}：</p>
          <p className="indent-4 mt-1 text-sm">{comment.content}</p>
          <p className="text-end text-xs text-slate-400">{getTimeString(comment.createdAt)}</p>
          <Button onClick={() => clickDeleteComment(comment.id)} >删除</Button>
        </Card>
      ))}
    </section>
    <BlogAdmin></BlogAdmin>
  </div>
}

function BlogAdmin() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const clickPostBlog = async () => {
    await postBlog(title, content);
    Toastify({
      text: "发布成功",
    }).showToast();
  }
  return (<section className="mt-10">
    <H2>博客管理</H2>
    <div>
      <label>标题：</label>
      <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
    </div>
    <div>
      <label>内容：</label>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} className="h-36"></TextArea>
    </div>
    <CardButton onClick={clickPostBlog}>发布</CardButton>
  </section>)
}