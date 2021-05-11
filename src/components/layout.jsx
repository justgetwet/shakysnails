import React from 'react'
import Header from './header'
import '../styles/tailwind.css'
// import "@fortawesome/fontawesome-svg-core/styles.css"
// import { config } from "@fortawesome/fontawesome-svg-core"
// config.autoAddCss = false

const Layout = ({ children }) => {
  const Footer = () => <div className="py-4">© Justgetwet 2021</div>
  return (
      <div className="px-2 max-w-screen-md sm:px-8 md:px-24">
        <header className="pt-12 pb-6">
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default Layout
