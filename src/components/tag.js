import React from 'react'

const Tag = ({children}) => {
  return (
    <span className="inline-block text-gray-600 text-xs font-light py-0.5 px-2 mr-2 mb-1 border border-solid rounded-full border-gray-400">{children}</span>
  )
}

export default Tag