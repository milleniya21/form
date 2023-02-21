import React from 'react'
import './box.css'

function Box () {
  return (
    <div className='des_box'>
       <p> Product Description </p>
       <textarea className='desc' rows="10" cols="100"  >
        Describe your product...
       </textarea>
    </div>
  )
}

export default Box
