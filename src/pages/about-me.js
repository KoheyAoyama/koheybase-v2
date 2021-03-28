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
            <h2 className="text-2xl font-bold">青山広平</h2>
            <p className="text-sm font-light text-gray-400 mb-4">Kohey Aoyama</p>
            <p className="mb-4">千葉県在住、都内ベンチャー企業に所属のUIデザイナー。</p>
            <p className="mb-4">サービスに特化した、効果的で拡張性の高いUIキットを最速で構築。開発スピードが優先されるフェーズにおいてもクオリティを疎かにせず、双方を両立したUIデザインを提供します。これにより、特に新規事業でMVPを必要とするようなフェーズで強力にサポートできます。</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">スキル</h2>
            <div>
              <Tag>UIデザイン</Tag>
              <Tag>UXデザイン</Tag>
              <Tag>情報設計</Tag>
              <Tag>Webデザイン</Tag>
              <Tag>WordPress</Tag>
              <Tag>Gatsby.js</Tag>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">略歴</h2>
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