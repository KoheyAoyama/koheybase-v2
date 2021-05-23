import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { urlFacebook, urlGitHub } from "../utils/constants"

const FooterMobile = () => {
  return (
    <div>
      <div className="w-wondow h-72 pt-24 flex flex-col items-center">
        <p className="text-2xl mb-6">
          <span role="img" aria-label="Hi!">🙌</span>
          話しかける
        </p>
        <div className="flex">
          <span>
            <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <span style={{ fontSize: '44px' }}>
                  <StaticImage src="../images/ic-messenger.png" />
                </span>
            </a>
          </span>
          <span>
            <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <span style={{ fontSize: '44px' }}><i class="fab fa-github"></i></span>
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