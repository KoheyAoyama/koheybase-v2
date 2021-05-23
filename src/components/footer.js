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
          <span className="flex items-center">
            <a
              href={urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <StaticImage src="../images/ic-messenger.png" width={48} height={48} />
            </a>
          </span>
          <span className="flex items-center">
            <a
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 flex items-center"
              >
                <StaticImage src="../images/ic-github.png" width={48} height={48} />
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