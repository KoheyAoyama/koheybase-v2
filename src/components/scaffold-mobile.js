import React from 'react'
import Head from '../components/head'
import GlobalMenuMobile from "../components/global-menu-mobile"
import HeaderMobile from "../components/header-mobile"
import FooterMobile from './footer-mobile'

const ScaffoldMobile = ({children}) => {
  return (
    <div>
      <Head />

      <main static>
        <HeaderMobile />
          <div className="h-24"></div>
          {children}
        <GlobalMenuMobile />
        <FooterMobile />
      </main>
    </div>
  )
}

export default ScaffoldMobile