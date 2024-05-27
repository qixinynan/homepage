'use client';
import { useEffect, useState } from "react";
import H2 from "../components/common/h2";
import StatusCard from "../components/status-card";
import Auth, { checkAuth, clearAuth } from "./auth";
import cookies from 'react-cookies'
import Link from "../components/common/link";


export default function Archives() {
  const [hasAuth, setHasAuth] = useState(undefined);
  useEffect(() => setHasAuth(checkAuth), [])
  console.log("auth", hasAuth);
  if (hasAuth === false) {
    return <Auth></Auth>
  }
  else if (hasAuth === true) {
    return (<div className="space-y-3 mx-10 mt-3">
      <H2>我的档案</H2>
      <StatusCard title="关系恢复！" time="不久后" desc="大成功！"></StatusCard>
      <StatusCard title="喝奶茶" time="昨天" desc="导致糖分摄入过高渗透压过高细胞失水死掉"></StatusCard>
      <StatusCard title="吃kfc然后吃哭了" time="1个月前" desc="没吃过这么好吃的东西，哭的泪把喝光的可乐杯子都盛满了"></StatusCard>
      <Link onClick={clearAuth} className="float-right px-10 cursor-pointer">清除验证</Link>
    </div>)
  }
  else {
    return (<div class="mt-10 rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-500 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-500 rounded col-span-2"></div>
              <div class="h-2 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-500 rounded"></div>
            <div class="space-y-3" />
            <div class="h-2 bg-slate-500 rounded"></div>
            <div class="space-y-10 grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-500 rounded col-span-2"></div>
              <div class="h-2 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-500 rounded"></div>
            <div class="h-2 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>)
  }
}