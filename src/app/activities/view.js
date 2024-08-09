'use client';
import H2 from "../components/common/h2";
import Card from "../components/common/card";
import ActivityCard from "../components/activity-card";
import Link from "../components/common/link";
import { useState, useEffect } from 'react';
import { getActivities } from "../api/activities";
import { getTimeString } from "../common/utils";

export default function ActivityView() {
  const [activities, setActivities] = useState([])
  const fetchActivities = async () => {
    const res = await getActivities();
    console.log((res));
    setActivities(res.data)
  }
  useEffect(() => {fetchActivities()}, []);
  return (
    <section>
      <H2>七夕泥的动态</H2>
      <div className="space-y-3">
        {activities.map((e, i) => (
          <ActivityCard key={i} id={e.id} title={e.content} time={getTimeString(e.createdAt)} desc={e.description} like={e.like}></ActivityCard>)
        )}
      </div>
    </section>
  )
}