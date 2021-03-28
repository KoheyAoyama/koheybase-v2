import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Scaffold from '../components/scaffold'
import Tag from '../components/tag'

const AboutMe = () => {
  return (
    <Scaffold>
      <div className="md:max-w-2xl m-auto">
        <div className="w-screen px-4 flex flex-col space-y-4"></div>

        <StaticImage
          className="
            w-full my-6
            md:ml-4 md:w-96
          "
          src="../images/img-my-profile.png"
          placeholder="blurred"
          aspectRatio={1}
        />

        <div className="px-4">
          <div className="mb-12">
            <h2 className="text-lg font-bold">青山広平</h2>
            <p className="text-sm font-light text-gray-600 mb-4 ml-0.5">Kohey Aoyama</p>
            <p className="mb-4">千葉県在住、都内ベンチャー企業に所属のUIデザイナー。</p>
            <p className="mb-4">サービスに特化した、効果的で拡張性の高いUIキットを最速で構築。開発スピードが優先されるフェーズにおいてもクオリティを疎かにせず、双方を両立したUIデザインを提供します。これにより、特に新規事業でMVPを必要とするようなフェーズで強力にサポートできます。</p>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4">スキル</h2>
            <div className="flex flex-wrap ml-0.5">
              <div className="mr-2 mb-1"><Tag>UIデザイン</Tag></div>
              <div className="mr-2 mb-1"><Tag>UXデザイン</Tag></div>
              <div className="mr-2 mb-1"><Tag>情報設計</Tag></div>
              <div className="mr-2 mb-1"><Tag>Webデザイン</Tag></div>
              <div className="mr-2 mb-1"><Tag>Figma</Tag></div>
              <div className="mr-2 mb-1"><Tag>Sketch</Tag></div>
              <div className="mr-2 mb-1"><Tag>WordPress</Tag></div>
              <div className="mr-2 mb-1"><Tag>Gatsby.js</Tag></div>
              <div className="mr-2 mb-1"><Tag>React.js</Tag></div>
              <div className="mr-2 mb-1"><Tag>HTML5</Tag></div>
              <div className="mr-2 mb-1"><Tag>CSS3</Tag></div>
              <div className="mr-2 mb-1"><Tag>SQL</Tag></div>
              <div className="mr-2 mb-1"><Tag>Netlify</Tag></div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">略歴</h2>
            <div>
              <h3 className="h-16 flex items-center">Nanameue.inc</h3>
              <div className="flex items-center">
                <p className="flex-grow">UIデザイナー</p>
                <p>2019-現在</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scaffold>
  )
}

export default AboutMe