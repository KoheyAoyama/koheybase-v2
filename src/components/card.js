import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Tag from "../components/tag"

const Card = ({ data }) => {
  const thumbnail = getImage(data.thumbnail)
  return (
    <Link to={`/works/${data.id}`}>
      <div className="w-full h-full bg-white pb-2">
        <GatsbyImage
          alt="Thumbnail"
          image={thumbnail}
          className="md:hover:shadow-lg"
        />
        <div className="
          px-3 py-2
          md:px-0.5
        ">
          <p className="font-bold px-0.5 mb-1 text-gray-600">{data.title}</p>
          <div className="flex flex-wrap">
            {data.genre.map((genre, index) => (
              <div className="mr-2 mb-1">
                <Tag key={index}>{genre}</Tag>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card