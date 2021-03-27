import React from "react"
import ScaffoldMobile from "../components/scaffold-mobile"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <ScaffoldMobile>
      <div className="w-screen flex flex-col">
        <div className="mb-12 px-4">
          <p>青山広平</p>
          <p>東京を拠点とするデジタルプロダクトデザイナー</p>
        </div>

        <div className="
          md:grid md:grid-cols-3 md:grid-flow-row md:gap-4 md:px-4
          ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </div>
    </ScaffoldMobile>
  )
}

export default IndexPage
