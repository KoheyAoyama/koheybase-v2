import React from 'react'
import Head from './head'
import GlobalMenuMobile from "./global-menu-mobile"
import Header from "./header"
import Footer from './footer'

const Scaffold = ({children}) => {
  return (
    <div>
      <Head />

      <main static>
        <Header />
          <div className="h-24"></div>
          {children}
        <GlobalMenuMobile />
        <Footer />
      </main>
    </div>
  )
}

export default Scaffold