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
      <div className="w-56 py-2 mb-6 shadow-xl rounded bg-white hidden" id="js-visibility-control">
        <nav>
          <ul>
            <li className="w-full">
              <a
              className="inline-block w-full h-16 px-3 flex items-center"
              href="/">
                <span className="w-10 mr-3 flex justify-center" style={{ fontSize: '24px' }}><i class="fas fa-home"></i></span>
                Home
              </a>
            </li>
            <li className="w-full">
              <Link
              to="/about-me/"
              className="inline-block w-full h-16 px-3 flex items-center"
              >
                <span className="w-10 mr-3 flex justify-center" style={{ fontSize: '24px' }}><i class="fas fa-user"></i></span>
                About Me
              </Link>
            </li>
            <li className="w-full">
              <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full h-16 px-3 flex items-center"
              >
                <span className="w-10 mr-3 flex justify-center" style={{ fontSize: '24px' }}><i class="fab fa-facebook-messenger"></i></span>
                Messenger
              </a>
            </li>
            <li className="w-full">
              <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full h-16 px-3 flex items-center"
              >
                <span className="w-10 mr-3 flex justify-center" style={{ fontSize: '24px' }}><i class="fab fa-github"></i></span>
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {// Floagin action button
      }
      <button
        className="w-16 h-16 bg-black rounded-full flex justify-center items-center shadow-2xl focus:outline-none"
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
