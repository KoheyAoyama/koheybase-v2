import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Tag from "../components/tag"

const Card = ({ data }) => {
  const thumbnail = getImage(data.thumbnail)
  return (
    <div className="w-full h-full bg-white pb-10">
      <GatsbyImage
        alt="Thumbnail"
        image={thumbnail}
        className="hover:shadow-lg"
      />
      <div className="px-3">
        <p className="text-lg font-bold">{data.title}</p>
        {data.genre.map((genre, index) => (
          <Tag key={index}>{genre}</Tag>
        ))}
      </div>
    </div>
  )
}

export default Card