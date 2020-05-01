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
        <Link to="/tutorial/part-zero">Part #0</Link>
      </li>
      <li>
        <Link to="/tutorial/part-one">Part #1</Link>
      </li>
    </ul>
  </div>
)