import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { urlFacebook, urlGitHub } from "../utils/constants"

const GlobalMenuMobile = () => {

  const [state, setState] = useState(false)

  useEffect(()=>{
    const menuBox = document.getElementById('js-visibility-control')
    state ? menuBox.classList.remove('hidden') : menuBox.classList.add('hidden')

    const fabIcon = document.getElementById('js-fab-icon')
    state ? fabIcon.innerHTML = 'clear' : fabIcon.innerHTML = 'notes'
  },[state])

  return (
    <div className="fixed bottom-8 right-4 flex flex-col items-end">

      {// Popup menu
      }
      <div className="w-44 py-4 mb-6 shadow-xl rounded bg-white hidden" id="js-visibility-control">
        <nav>
          <ul>
            <li className="w-full">
              <a
              className="inline-block w-full h-12 px-6 flex items-center"
              href="/">Home</a>
            </li>
            <li className="w-full">
              <Link
              to="/about-me/"
              className="inline-block w-full h-12 px-6 flex items-center"
              >About Me</Link>
            </li>
            <li className="w-full">
              <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full h-12 px-6 flex items-center"
              >Facebook</a>
            </li>
            <li className="w-full">
              <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full h-12 px-6 flex items-center"
              >Github</a>
            </li>
          </ul>
        </nav>
      </div>

      {// Floagin action button
      }
      <button
        className="w-16 h-16 bg-black rounded-full flex justify-center items-center shadow-2xl"
        onClick={()=> {
          setState(!state)
        }}
      >
        <span className="material-icons text-white" style={{ fontSize: '36px' }} id="js-fab-icon">menu</span>
      </button>
    </div>

  )
}

export default GlobalMenuMobile
