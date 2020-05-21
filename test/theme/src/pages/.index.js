import React from 'react'
import TemplateSite from '../templates/TemplateSite';

export default function HomePage(props) {
  console.log(props.pageContext);

  return (
    <TemplateSite 
      headerIndex={props.pageContext.header || 1}
      footerIndex={props.pageContext.footer || 1}
      blocks={props.pageContext.blocks || []}
    >
    </TemplateSite>    
  )
}
