import React from 'react'
import { Link } from 'gatsby'
import { urlYoutrust, urlFacebook, urlGitHub } from "../utils/constants"

const HeaderMobile = () => {
  return (
    <div className="
      w-screen h-24 px-4 pb-4 fixed z-50 bg-white bg-opacity-70 flex items-center

    ">
      <div className="h-full flex items-end flex-grow">
        <h1 className="text-4xl font-title font-black tracking-tighter antialiased mb-1">
          <Link to="/">Koheybase</Link>
        </h1>

        <nav className="hidden md:block">
          <ul className="flex ml-5">
            <li>
              <Link
              className="inline-block h-9 px-4 flex items-center"
              to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
              to="/about-me/"
              className="inline-block h-9 px-4 flex items-center"
              >
                About Me
              </Link>
            </li>
            <li>
              <a
              href={urlYoutrust}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-9 px-4 flex items-center"
              >
                <span
                  className="flex items-center"
                >
                  <img src="/ic/ic-youtrust.png" alt="Icon, YOUTRUST" className="w-6" />
                </span>
              </a>
            </li>
            <li>
              <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-9 px-4 flex items-center"
              >
                <span
                  className="flex items-center"
                >
                  <img src="/ic/ic-messenger.png" alt="Icon, Facebook Messenger" className="w-6" />
                </span>
              </a>
            </li>
            <li>
              <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-9 px-4 flex items-center"
              >
                <span
                  className="flex items-center"
                >
                  <img src="/ic/ic-github.png" alt="Icon, GitHub" className="w-6" />
                </span>
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