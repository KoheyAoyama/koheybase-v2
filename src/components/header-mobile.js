import React from 'react'

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

export default HeaderMobile