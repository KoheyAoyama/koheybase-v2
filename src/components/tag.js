import React from 'react'

const Tag = ({children}) => {
  return (
    <span className="text-gray-400 text-sm font-light py-0.5 px-2 mr-2 border border-solid rounded-full border-gray-400">{children}</span>
  )
}

export default Tag