'use client'
import { useEffect, useState } from "react";
import { getAllDaily, getAllDailyItems } from "../api/daily";
import CardButton from "../components/common/card-btn";
import Dialog from "../components/dialog";
import Card from "../components/common/card";
import { getTimeString } from "../common/utils";
import H2 from "../components/common/h2";

export default function DailyAll() {
  const [showAllDaily, setShowAllDaily] = useState(false);
  const [showAllItem, setShowAllItem] = useState(false)
  return (
    <div>
      <DailyAllDaily active={showAllDaily} onClose={() => {setShowAllDaily(false)}}></DailyAllDaily>
      <DailyAllItem active={showAllItem} onClose={() => {setShowAllItem(false)}}></DailyAllItem>
      <div className="mt-5 flex gap-2">
        <CardButton onClick={() => {setShowAllDaily(true)}} className="flex-1">全部锐评</CardButton>

        <CardButton onClick={() => {setShowAllItem(true)}} className="flex-1">全部事项</CardButton>
      </div>
    </div>
  )
}

function DailyAllDaily({active, onClose}) {
  const [dailies, setDailies] = useState([])
  useEffect(() => {getData()}, [])

  const getData = async () => {
    const res = await getAllDaily();
    setDailies(res.data)
  }
  return (
    <Dialog onClose={onClose} active={active}>
      <H2>全部锐评</H2>
      <div className="space-y-2">
        {dailies.map((item) => (
          <Card className="space-x-2" key={item.id}>
            <span>{getTimeString(item.createdAt)}</span>
            <b>{item.title}</b>
            <span>{item.score}分</span>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
      <CardButton className="mt-3 mb-0" onClick={onClose}>关闭</CardButton>
    </Dialog>
    
  )
}

function DailyAllItem({active, onClose}) {
  const [items, setItems] = useState([])
  useEffect(() => {getData()}, [])

  const getData = async () => {
    const res = await getAllDailyItems();
    console.log(res);
    setItems(res.data)
  }
  return (
    <Dialog onClose={onClose} active={active}>
      <H2>全部事项</H2>
      <div className="space-y-2">
        {items.map((item) => (
          <Card className="space-x-2" key={item.id}>
            <span>{getTimeString(item.createdAt)}</span>
            <b>{item.content}</b>
          </Card>
        ))}
      </div>
      <CardButton className="mt-3 mb-0" onClick={onClose}>关闭</CardButton>
    </Dialog>
  )
}