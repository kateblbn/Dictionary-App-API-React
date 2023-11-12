import React from 'react'
import noFound from '../images/icon-search.svg'

function TemplateNoWord({ title, p }) {
  return (
    <div>
      <div>
        <img src={noFound} alt='No Found' />
      </div>
      <h2>{title}</h2>
      <p>{p}</p>
    </div>
  )
}

export default TemplateNoWord