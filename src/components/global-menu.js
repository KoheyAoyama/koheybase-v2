import React, { useState, useEffect } from "react"

const GlobalMenu = () => {

  const [state, setState] = useState(false)

  useEffect(()=>{
    const menuBox = document.getElementById('js-visibility-control')

    if (state) {
      menuBox.classList.remove('hidden')
    } else {
      menuBox.classList.add('hidden')
    }
  },[state])

  //
  return (
    <div className="fixed bottom-8 right-4 flex flex-col items-end">
      <div className="w-44 py-4 mb-6 shadow-xl rounded bg-white hidden" id="js-visibility-control">
        <nav>
          <ul>
            <li className="w-full">
              <a
              className="inline-block w-full h-12 px-6 flex items-center"
              href="/">Home</a>
            </li>
            <li className="w-full">
              <a
              href="/"
              className="inline-block w-full h-12 px-6 flex items-center"
              >About Me</a>
            </li>
            <li className="w-full">
              <a
              href="/"
              className="inline-block w-full h-12 px-6 flex items-center"
              >Facebook</a>
            </li>
            <li className="w-full">
              <a
              href="/"
              className="inline-block w-full h-12 px-6 flex items-center"
              >Github</a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="w-16 h-16 bg-black rounded-full flex justify-center items-center"
        onClick={()=> {
          setState(!state)
        }}
      >
        <div className="w-8 h-8 bg-red-500"></div>
      </div>
    </div>

  )
}

export default GlobalMenu
