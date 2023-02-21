import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='title'>
       <h2>Product Details</h2>
       <p> Please provide details of this product.</p>
       <br></br>
       <div className='Product_details'>
             <div className='col-1'>
                <h3>Product Name*</h3>
                <input type ="text" id ="text1"placeholder="Type your product name "/>
             </div>
             <div className='col-2'>
                <h3>SKU</h3>
                <input type ="text" id ="text2" placeholder="T000-A-A "/>
                <form action="/action_page.php">
                    <input type="checkbox" id= "sku"/><label> Auto -generate SKU </label>
                </form>
             </div>
       </div>
    </div>
  )
}

export default Header
