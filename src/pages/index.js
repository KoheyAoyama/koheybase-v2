import React from "react"
import GrobalMenu from "../components/global-menu"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <main static>
      <HeaderMobile />
      <div className="h-24"></div>
      <div className="w-screen px-4 flex flex-col space-y-4">
        <div className="mb-2">
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


      <GrobalMenu></GrobalMenu>
    </main>
  )
}

const HeaderMobile = () => {
  return (
    <div className="w-screen h-24 px-4 pb-4 fixed z-50 bg-white bg-opacity-70 flex items-center">
      <div className="h-full flex items-end flex-grow">
        <h1 className="text-4xl font-extrabold antialiased">Koheybase</h1>
      </div>
      <div className="w-8 h-8 bg-black"></div>

    </div>
  )
}

export default IndexPage
