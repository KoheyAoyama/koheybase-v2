import React from 'react'
import Head from './head'
import GlobalMenuMobile from "./global-menu-mobile"
import Header from "./header"
import FooterMobile from './footer-mobile'

const Scaffold = ({children}) => {
  return (
    <div>
      <Head />

      <main static>
        <Header />
          <div className="h-24"></div>
          {children}
        <GlobalMenuMobile />
        <FooterMobile />
      </main>
    </div>
  )
}

export default Scaffold