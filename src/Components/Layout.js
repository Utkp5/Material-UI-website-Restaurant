import React from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout
