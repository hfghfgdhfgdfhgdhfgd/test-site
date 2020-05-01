import React from 'react'
import {Link} from 'gatsby'

export default () => (
  <div>
    <ul>
      <li>
        <Link to="/events">events</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/posts">posts</Link>
      </li>
    </ul>
  </div>
)