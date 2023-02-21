import React from 'react'
import './configure.css'

 function Configure() {
  return (
    <div>
        <div className='configure_stock'>
            <h2>Configure how stock for this product is tracked: </h2>
            <p>A single variants will be created automatically unless you enable the multiple variant options. </p>
            <form action="/action_page.php">
                    <input type="checkbox" /><label>This products has multiple variants </label><br></br>
            </form>

            <h2>Configure how stock for this product is tracked: </h2>
            <p>A single variants will be created automatically unless you enable the multiple variant options. </p>
            <form action="/action_page.php">
                    <input type="checkbox" /><label>This products has multiple variants</label><br></br>
            </form>
        </div>
        <div className='create_btn'>
             <button>Create Order </button>
        </div>
    </div>
  )
}

export default Configure
