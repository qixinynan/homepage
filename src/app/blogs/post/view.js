'use client';
import Button from "@/app/components/common/button";
import H2 from "@/app/components/common/h2";
import Input from "@/app/components/common/input";
import TextArea from "@/app/components/common/textarea";
import Markdown from "react-markdown";
import UnderlineInput from "@/app/components/common/underline-input";
import { useState } from "react";
import { postBlog } from "../../api/blog";
import toast from "../../common/toast";

export default function PostBlogView() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const clickPostBlog = async () => {
    if (!title || !content) {
      toast("请确保标题或者内容完整", "danger")
      return;
    }
    await postBlog(title, content);
    toast("发布成功");
  }
  return (<div className="pt-2">
    <div className="container mx-auto py-8">
      <Button color="green" className="float-right" onClick={clickPostBlog}>发布</Button>
      <div className="flex mt-10">
        <div className="w-1/2 bg-white p-4 border-r">
          <H2>发布文章</H2>
          <UnderlineInput placeHolder="标题" value={title} onChange={(e) => { setTitle(e.target.value); }}></UnderlineInput>
          <TextArea placeHolder="博客内容 （Markdown格式）" className="focus:outline-none bg-white mt-3 h-96" value={content} onChange={(e) => { setContent(e.target.value) }}></TextArea>
        </div>
        <div className="w-1/2 bg-white p-4 ml-4">
          <H2 classNameName="border-b">预览：</H2>
          <h1 style={{ fontSize: 1.8 + 'em' }}>{title != '' ? title : "请先输入标题"}</h1>
          <div id="markdown" class="markdown-body">
            <Markdown id="markdown">{content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  </div>)
}