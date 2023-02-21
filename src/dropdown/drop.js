import React from 'react'
import './drop.css'

function Drop() {
  return (
    <div className='section'>
        <form action="/action_page.php">  
            <p>Supplier</p>                    
            <select  id="sort1">
                <option value="Supplier">Select a supplier  </option>
            </select>      
            <button> + New </button>                   
        </form>  
        <form action="/action_page.php"> 
            <p>Product type</p>                     
            <select  id="sort2">
                <option value="Product type ">Select a type  </option>
            </select>       
            <button id =" btn2">+ New</button>                  
        </form>  
        <form action="/action_page.php">   
            <p>Brand</p>                   
            <select id="sort3">
                <option value="Brand">Select a supplier</option>
            </select>                         
            <button id =" btn3">+ New</button>
        </form>  
      
      
    </div>
  )
}

export default Drop



