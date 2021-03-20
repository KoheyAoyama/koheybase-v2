import React from 'react'
import GlobalMenuMobile from "../components/global-menu-mobile"
import HeaderMobile from "../components/header-mobile"
import FooterMobile from './footer-mobile'

const ScaffoldMobile = ({children}) => {
  return (
    <main static>
      <HeaderMobile />
        <div className="h-24"></div>
        {children}
      <GlobalMenuMobile />
      <FooterMobile />
    </main>
  )
}

export default ScaffoldMobile