'use client';
import Card from "./common/card";
import TextMd from "./common/text-md";
import { likeActivities } from "../api/activities";
import {useState} from 'react';

export default function ActivityCard({ id, time, title, desc, like, className }) {
  const onCardClick = async () => {
    await likeActivities(id);
    setLikeNumber(likeNumber + 1);
  }
  const [likeNumber, setLikeNumber] = useState(like);
  return (
    <Card onClick={onCardClick} className={`${className} flex justify-between`}>
      <TextMd>
        <span className="">{time}, </span>
        <span className="font-bold">{title}</span>
        {desc != undefined &&
          <>
            <span>: </span>
            <span className="italic text-gray-500">{desc}</span>
          </>
        }
      </TextMd>
      <p className="mr-3 text-sm">❤️ {likeNumber}</p>
      {/* <div className="mt-5 text-xs">回复：
        <p className="indent-5">
          <span className="text-blue-500">匿名人士</span>
          <span>:</span>
          <span className="ml-2">我不这么喜欢</span>
        </p>
      </div> */}
    </Card>
  )
}