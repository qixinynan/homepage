'use client'

import Card from "../components/common/card"
import ActivityCard from "../components/activity-card"
import { useState, useEffect } from "react"
import { nowActivities } from "../api/activities";
import { getTimeString } from "../common/utils";

export default function Now() {
  const [activity, setActivity] = useState(undefined);
  const fetchActivity = async () => {
    const res = await nowActivities();
    setActivity(res.data)
  }
  useEffect(() => {fetchActivity()}, [])
  return (
    <div className="my-2">
      <p className="text-md font-bold mb-2">
        七夕泥目前正在:
      </p>
      {(activity != undefined) ? (
      <ActivityCard title={activity.content} time={getTimeString(activity.updatedAt)} desc={activity.description}></ActivityCard>
    ) : (
      <div className="animate-pulse w-full max-w-xl flex space-x-2">
        <div className="rounded flex-1 bg-gray-300 h-4"></div>
        <div className="w-1"></div>
        <div className="rounded flex-1 bg-gray-300 h-4"></div>
      </div>
      )}
    </div>
  )
}