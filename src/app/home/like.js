'use client'
import { useEffect, useState } from "react";
import Button from "../components/common/button";
import confetti from "canvas-confetti";
import { getLike, like } from "../api/like";
export default function Like() {
  const [likeCount, setLikeCount] = useState();
  const getLikeCount = async () => {
    const likeData = await getLike();
    setLikeCount(likeData.data.value)
  }
  useEffect(() => {
    getLikeCount();
  }, [])
  const clickLike = () => {
    confetti({
      particleCount: 150,
      spread: 60
    });
    like();
    setLikeCount(likeCount + 1);
  }
  return <Button className="flex mx-auto my-10" color="pink" onClick={clickLike}>
    ❤️
    {(likeCount != undefined) ? (
      likeCount
    ) : (
      <div className="inline-block animate-pulse h-6 bg-gray-100 opacity-25 rounded w-8 mx-1" />
    )}
    <span className="ml-2">点赞👍</span></Button >
}