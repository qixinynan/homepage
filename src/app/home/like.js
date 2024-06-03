'use client'
import { useEffect, useState } from "react";
import Button from "../components/common/button";
import confetti from "canvas-confetti";
import { getLike, like } from "../api/like";
export default function Like() {
  const [likeCount, setLikeCount] = useState();
  const getLikeCount = async () => {
    const likeData = await getLike();
    setLikeCount(likeData.data)
  }
  useEffect(() => {
    getLikeCount();
  }, [])
  return <Button className="block mx-auto my-10" color="pink" onClick={() => {
    confetti({
      particleCount: 150,
      spread: 60
    });
    like();
    setLikeCount(likeCount + 1);
  }}>❤️{likeCount} 点赞👍</Button>
}