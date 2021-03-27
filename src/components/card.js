import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Tag from "../components/tag"

const Card = () => {

  return (
    <div className="w-full h-full bg-white pb-10">
      <StaticImage
        alt="Thumbnail"
        aspectRatio={2/1}
        //imgStyle={{borderTopLeftRadius: '0.75rem',borderTopRightRadius: '0.75rem'}}
        src="../images/thumb-sample.jpeg"
      />
      <div className="px-3">
        <p className="text-lg font-bold">ワークタイトル</p>
        <Tag>UI/UXデザイン</Tag>
        <Tag>UI/UXデザイン</Tag>
      </div>
    </div>
  )
}

export default Card