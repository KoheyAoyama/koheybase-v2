import React from "react"
import ScaffoldMobile from "../components/scaffold-mobile"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <ScaffoldMobile>
      <div className="w-screen flex flex-col space-y-4">
        <div className="mb-2 px-4">
          <p>青山広平</p>
          <p>東京を拠点とするデジタルプロダクトデザイナー</p>
        </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </ScaffoldMobile>
  )
}

export default IndexPage
