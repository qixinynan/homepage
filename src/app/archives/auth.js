"use client";
import H2 from "../components/common/h2"
import Input from "../components/common/input"
import Button from "../components/common/button"
import { useState } from "react";
import cookies from 'react-cookies'


const { SHA256 } = require("sha2");


export function checkAuth() {
  const auth = cookies.load("auth");
  if (auth === "11d4ddc357e0822968dbfd226b6e1c2aac018d076a54da4f65e1dc8180684ac3") {
    return true;
  }
  else {
    return false;
  }
}

export function clearAuth() {
  cookies.remove('auth');
  location.reload();
}

export default function Auth() {
  const [password, setPassword] = useState('')

  const click = () => {
    const auth = SHA256(password).toString("hex");
    console.log(auth);
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    cookies.save('auth', auth, { expires: expires })
    location.reload();
  }
  return <>
    <div className="mt-5">
      <H2 className="text-center">需要验证</H2>
      <p className="text-center text-sm">只有七夕泥及其所信任者有权查看此页面</p>
      <div className="w-80 mx-auto">
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-10 w-full" placeHolder="密钥"></Input>
        <Button className="w-full" onClick={click}>验证～</Button>
      </div>
    </div >
  </>
}