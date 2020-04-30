import React from 'react'
import Header from './header'
import SiteBar from './siteBar'

export default ({children}) => {
  return (
    <div>
      <Header/>
      <SiteBar/>
      {children}
    </div>
  )
}