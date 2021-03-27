import React from 'react'
import Head from './head'
import GlobalMenuMobile from "./global-menu-mobile"
import HeaderMobile from "./header-mobile"
import FooterMobile from './footer-mobile'

const Scaffold = ({children}) => {
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

export default Scaffold