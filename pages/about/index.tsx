// import Image from "next/image"
// import imgBig from "@/assets/bigImg.jpg"
// import HeavyComponent from "@/components/HeavyComponent"
import dynamic from "next/dynamic"
import { useState } from "react"

const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), { 
    ssr: false,
    loading: () => <p>Loading...</p>,
 })
export default function About() {
  const [show, setShow] = useState(false)
  return <div>
    <h1 className="text-3xl font-bold">About Page</h1>
    <button onClick={() => setShow(true)}>Show Component</button>
    {/* <img {...imgBig}/> */}
    {show && <HeavyComponent />}
  </div>
}
