import React from 'react'
import {Link} from 'react-router-dom'

const Layout = (props) => {
  return (
    <div>
        <div className="header header_box">
           <div className="d-flex justify-content-between">
            <Link className='link' to='/'>
             <h1>CarRental</h1>
            </Link>
             <Link to='/addcar'>
                  <button className='btn'>AddCar</button>
              </Link>

           </div>

        </div>

        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default Layout