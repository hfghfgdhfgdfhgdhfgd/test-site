import React, { useState } from 'react'
import Header from './header'
import SiteBar from './siteBar'

export default ({children}) => {
  const [test, setTest] = useState(0)
  console.log("RERENDER");

  return (
    <div>
      <Header/>
      <SiteBar/>
      {test}
      <button onClick={() => setTest('test')}>1</button>
      {children}
    </div>
  )
}