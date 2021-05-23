import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { urlYoutrust, urlFacebook, urlGitHub } from "../utils/constants"

const GlobalMenuMobile = () => {

  const [state, setState] = useState(false)

  useEffect(()=>{
    const menuBox = document.getElementById('js-visibility-control')
    state ? menuBox.classList.remove('hidden') : menuBox.classList.add('hidden')

    const fabIcon = document.getElementById('js-fab-icon')
    state ? fabIcon.innerHTML = 'clear' : fabIcon.innerHTML = 'notes'
  },[state])

  return (
    <div className="
      fixed bottom-8 right-4 flex flex-col items-end
      md:hidden
    ">

      {// Popup menu
      }
      <div className="w-56 py-2 mb-6 shadow-xl rounded bg-white hidden" id="js-visibility-control">
        <nav>
          <ul>
            <li className="w-full">
              <a
              className="inline-block w-full h-16 px-3 flex items-center"
              href="/">
                <span
                  className="w-10 mr-3 flex justify-center"
                >
                  <img src="/ic/ic-koheybase.png" alt="Icon, Koheybase" className="w-6 h-6" />
                </span>
                Home
              </a>
            </li>
            <li className="w-full">
              <Link
              to="/about-me/"
              className="inline-block w-full h-16 px-3 flex items-center"
              >
                <span className="w-10 mr-3 flex justify-center">
                  <img src="/ic/ic-profile.png" alt="Icon, Profile" className="w-6 h-6" />
                </span>
                About Me
              </Link>
            </li>
            <li className="w-full">
              <a
              href={urlYoutrust}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full h-16 px-3 flex items-center"
              >
                <span
                  className="w-10 mr-3 flex justify-center"
                >
                  <img src="/ic/ic-youtrust.png" alt="Icon, YOUTRUST" className="w-6 h-6" />
                </span>
                YOUTRUST
              </a>
            </li>
            <li className="w-full">
              <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full h-16 px-3 flex items-center"
              >
                <span className="w-10 mr-3 flex justify-center">
                  <img src="/ic/ic-messenger.png" alt="Icon, Facebook Messenger" className="w-6 h-6" />
                </span>
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
                <span className="w-10 mr-3 flex justify-center">
                  <img src="/ic/ic-github.png" alt="Icon, GitHub" className="w-6 h-6" />
                </span>
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {// Floagin action button
      }
      <button
        className="w-16 h-16 bg-primary rounded-full flex justify-center items-center shadow-lg focus:outline-none"
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
