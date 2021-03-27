import React from "react"
import Scaffold from "../components/scaffold"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <Scaffold>
      <div className="w-screen flex flex-col">
        <div className="mb-10 px-4">
          <p>青山広平</p>
          <p>東京を拠点とするUIデザイナー</p>
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
    </Scaffold>
  )
}

export default IndexPage
