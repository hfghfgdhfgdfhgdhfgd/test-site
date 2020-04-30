import React from 'react'

export default ({ pageContext: {servers} }) => {
  return (
    <div>
      {
        servers.map(server => 
        <div key={server.username}>
          <h1>{server.type}</h1>
          <div>{server.username}</div>
        </div>
        )
      }
    </div>
  )
}
