import React from 'react'
import {Link} from 'gatsby'
import { urlFacebook, urlGitHub } from "../utils/constants"

const HeaderMobile = () => {
  return (
    <div className="
      w-screen h-24 px-4 pb-4 fixed z-50 bg-white bg-opacity-70 flex items-center

    ">
      <div className="h-full flex items-end flex-grow">
        <h1 className="text-4xl font-extrabold antialiased">Koheybase</h1>

        <nav className="hidden md:block">
          <ul className="flex ml-8">
            <li>
              <a
              className="inline-block h-10 px-3 flex items-center"
              href="/">
                Home
              </a>
            </li>
            <li>
              <Link
              to="/about-me/"
              className="inline-block h-10 px-3 flex items-center"
              >
                About Me
              </Link>
            </li>
            <li>
              <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-10 px-3 flex items-center"
              >
                <span style={{ fontSize: '20px' }}><i class="fab fa-facebook-messenger"></i></span>
              </a>
            </li>
            <li>
              <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-10 px-3 flex items-center"
              >
                <span style={{ fontSize: '20px' }}><i class="fab fa-github"></i></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-8 h-8 bg-black hidden"></div>

    </div>
  )
}

export default HeaderMobile