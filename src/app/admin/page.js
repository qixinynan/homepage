"use client";
import H2 from "../components/common/h2"
import { deleteComment, getComments, sendComment } from "../api/comment";
import Card from "../components/common/card";
import { useEffect, useState } from "react"
import { getTimeString } from "../common/utils";
import Button from "../components/common/button";
export default function Admin() {
  const [comments, setComments] = useState([])
  const fetchComments = async () => {
    const res = await getComments();
    const data = (await res.json()).data
    data.reverse()
    console.log("e", data);
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
  </div>
}