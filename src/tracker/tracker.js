import React from 'react'
import './tracker.css'

function Tracker () {
  return (
    <div className='stock_tracker'>
        <div className='track_checkbox'>
                <p>Configure how stock for this product is tracked : </p>
                <form action="/action_page.php">
                    <input type="checkbox" /><label>Manage stock levels </label><br></br>
                    <input type="checkbox" /><label>Sellable </label><br></br>
                    <input type="checkbox" /><label>Batch tracked</label><br></br>
                </form>
        </div>
        <div className='price'>
                 <p>Buy Price </p>
                 <input type="number" placeholder='$'/>
                 <p>Wholesale Price </p>
                 <input type="number" placeholder='$'/>
                 <p>Retail Price </p>
                 <input type="number" placeholder='$'/>
        </div>
             
    </div>
  )
}

export default Tracker
