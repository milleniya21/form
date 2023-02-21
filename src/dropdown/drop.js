import React from 'react'

function Drop() {
  return (
    <div>
        <form action="/action_page.php">  
            <p>Supplier</p>                    
            <select  id="sort">
                <option value="Supplier">Select a supplier  </option>
            </select>      
            <button>+ New</button>                   
        </form>  
        <form action="/action_page.php"> 
            <p>Product type</p>                     
            <select  id="sort">
                <option value="Product type ">Select a type  </option>
            </select>       
            <button>+ New</button>                  
        </form>  
        <form action="/action_page.php">   
            <p>Brand</p>                   
            <select id="sort">
                <option value="Brand">Select a supplier</option>
            </select>                         
            <button>+ New</button>
        </form>  
      
      
    </div>
  )
}

export default Drop



