import React from 'react'
import { urlFacebook, urlGitHub } from "../utils/constants"

const FooterMobile = () => {
  return (
    <div>
      <div className="w-wondow h-72 pt-24 flex flex-col items-center">
        <p className="text-2xl mb-6">🙌 話しかける</p>
        <div className="flex">
          <span>
            <a
            href={urlFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full h-12 px-6 flex items-center"
            >Facebook</a>
          </span>
          <span>
            <a
            href={urlGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full h-12 px-6 flex items-center"
            >Github</a>
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