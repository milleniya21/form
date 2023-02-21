import React from 'react'
import './element.css'

function Other () {
  return (
    <div className='details'>
        <div className='col-1'>
            
            <form action="/action_page.php"> 
                <p>Weight</p> 
                <div className='close'>             
                <input type ="text" id="text1" placeholder='e.g 10'/>
                <select  id="sort">
                    <option value="Product type "> g  </option>
                </select>   
                </div>                      
            </form>  
        </div>
        <div className='col-2'> 
              <form action="/action_page.php"> 
                <p>Vendor Product Reference</p>                
                <input type ="text"  id="text2"placeholder='e.g. Summer 2022'/>
              </form>
        </div>
    </div>
  )
}

export default Other
