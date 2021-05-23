import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Scaffold from '../components/scaffold'

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
          <div className="mb-16">
            <h2 className="text-lg font-bold">
              青山広平
            </h2>
            <p className="text-sm font-light text-gray-600 mb-4 ml-0.5">
              Kohey Aoyama
            </p>
            <p className="mb-4">
              千葉県在住、都内ベンチャー企業に所属のUIデザイナー。
            </p>
            <p className="mb-4">
              工業高専卒業後、機械系メーカー2社で開発および設計職に就いた後にUIデザイナーに転身。これまで10個以上のプロダクト運営に携わり、最大ユーザー規模は登録300万、DAU10万。
            </p>
            <p className="mb-4">
              『広い視野で考え、徹底的に作り込む。そのために一番のユーザであれ』を理念に『コアバリューを確実にユーザーに突き刺すデザイン』を実践。
            </p>
            <p className="mb-4">
              日英対応、猫派、バイク乗り。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">略歴</h2>
            <div>
              <div className="md:flex md:items-center">
                <h3 className="

                  md:h-16 md:flex md:items-center md:flex-grow"
                >
                  株式会社ナナメウエ
                </h3>
                <p className="mr-4">リードデザイナー</p>
                <p className="text-gray-400">2019-現在</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scaffold>
  )
}

export default AboutMe