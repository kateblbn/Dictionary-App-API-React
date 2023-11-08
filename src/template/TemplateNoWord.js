import React from 'react'
import noFound from '../images/icon-search.svg'

function TemplateNoWord({title, p}) {
  return (
    <div>
        <div>
            <img src={noFound} alt='No Found'/>
        </div>
        <h2>{title}</h2>
        <p>{p}</p>
    </div>
  )
}

//        <h2>No Definitions Found</h2>
{/* <p>Sorry pal, we couldn't find definitions for the word you were looking for. 
You can try the search again at later time or head to the web instead.</p> */}


export default TemplateNoWord