import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import {Row,Col} from 'antd'
import {useParams} from 'react-router-dom'
import { getCar } from '../../services/apiCalls'
import axios from 'axios'

const Car = () => { 

    const {id} = useParams()
    const [car,setCar] = useState({})

    useEffect(() => {
      const displaySingleCar = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/car/${id}`)
          console.log(res) 
          setCar(res.data)
        } catch (error) {
          console.log(error)
        }
      }
        displaySingleCar()
    }, [id])
    

  return (
    <Layout>

     <Row className='mt-5 p-3'>       
       <Col lg={10} xs={6}>
            <img className='detailCarImg'src={`http://localhost:5000/uploads/${car.picture}`} alt="carimg"  />
       </Col>

       <Col lg={10} xs={10} className='mt-5'>
          
            <div>
                <h1>Model Name : {car.carModel}</h1> 
                <hr /> 
                
                <p>{car.carColor}</p> 
                
                <p>{car.carRegistrationNo}</p>  
                
            </div>
          
       </Col>
     </Row>


    </Layout>
  )
}

export default Car