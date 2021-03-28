import React from 'react'

const Tag = ({children}) => {
  return (
    <div className="inline-block text-gray-400 text-xs py-0.5 px-2 border border-solid rounded-full border-gray-300">{children}</div>
  )
}

export default Tag