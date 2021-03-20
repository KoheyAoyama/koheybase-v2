import React from 'react'
import Tag from "../components/tag"
import VariableImage from "../utils/variable-image"
import thumbImg from "../images/thumb-sample.jpeg"

const Card = () => {
  return (
    <div className="w-full h-full bg-white shadow-md pb-1 rounded-xl">
      <VariableImage>
        <img className="w-full h-full rounded-t-xl object-cover" src={thumbImg} />
      </VariableImage>
      <div className="p-3">
      <p className="text-lg font-bold pb-2">ワークタイトル</p>
      <Tag>UI/UXデザイン</Tag>
      <Tag>UI/UXデザイン</Tag>
      </div>
    </div>
  )
}

export default Card