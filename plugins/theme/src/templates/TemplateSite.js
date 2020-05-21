import React from 'react'
import headers from './Headers';
import footers from './Footers';
import blocks from './blocks';

export default function TemplateSite(props) {
  const headerIndex = props.headerIndex || 1;
  const footerIndex = props.footerIndex || 1;
  const Header = headers['Header' + headerIndex];
  const Footer = footers['Footer' + footerIndex]
  const Content = props.blocks
                       .map(nameBlock => blocks[nameBlock])
                       .filter(item => typeof item === 'function')
                       .map((Func, index) => <Func key={index}/>);
  console.log(Content);

  return (
    <div>
      <Header/>
      {
        Content
      }
      {
        props.children
      }
      <Footer/>
    </div>
  )
}
