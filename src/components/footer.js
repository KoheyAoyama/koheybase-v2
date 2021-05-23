import React from 'react'
import { urlYoutrust, urlFacebook, urlGitHub } from "../utils/constants"

const FooterMobile = () => {
  return (
    <div>
      <div className="w-wondow h-72 pt-24 flex flex-col items-center">
        <p className="text-2xl mb-6">
          <span role="img" aria-label="Hi!">🙌</span>
          話しかける
        </p>
        <div className="flex">
          <span className="flex items-center">
            <a
              href={urlYoutrust}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <img src="/ic/ic-youtrust.png" alt="Icon, YOUTRUST" className="w-12" />
            </a>
          </span>
          <span className="flex items-center">
            <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <img src="/ic/ic-messenger.png" alt="Icon, Messegner" className="w-12" />
            </a>
          </span>
          <span className="flex items-center">
            <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <img src="/ic/ic-github.png" alt="Icon, GitHub" className="w-12" />
            </a>
          </span>
        </div>
      </div>
      <div className="h-8 flex justify-center">
        <small className="">&copy; Kohey Aoyama 2021</small>
      </div>
    </div>

  )
}

export default FooterMobile