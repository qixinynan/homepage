"use client";
import { useEffect, useState } from 'react';
import remark from 'remark';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified'
import "supports-color";

export default function Markdown({ content }) {
  const [html, setHtml] = useState('');
  const getHtml = async () => {
    const res = await unified().use(remarkParse).use(remarkHtml).process(content)
    setHtml(String(res.value));
    console.log("res to", String(res.value));
  }
  useEffect(() => { getHtml() }, [content])
  console.log("html", html)
  return <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
