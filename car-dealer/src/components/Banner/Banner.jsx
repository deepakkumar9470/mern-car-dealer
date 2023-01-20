import React from 'react'
import car from '../../images/car.png'
import { Button } from 'react-bootstrap'
const Banner = () => {
  return (
    <div className='banner'>
        <img src={car} alt="carimg" />
        <div className='carPara'>
            <p>Car Selling Market Place</p>
            
        </div>
    </div>
  )
}

export default Banner