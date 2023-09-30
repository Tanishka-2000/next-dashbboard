"use client"
import { useState } from "react";
import Main from "@/components/Main"
// import Navbar from '@/components/Navbar'
import Sidebar from "@/components/Sidebar"

export default function Home() {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <div className="flex bg-body">
      <Sidebar open={open} setOpen={setOpen}/>
      <Main  open={open} setOpen={setOpen}/>
    </div>
  )
}
