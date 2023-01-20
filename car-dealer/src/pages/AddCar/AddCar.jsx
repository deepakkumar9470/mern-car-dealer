import React, { useState, useEffect } from 'react'
// import Layout from '../../components/Layout/Layout'
import { Row, Col, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { addCar } from '../../services/apiCalls'
import { FcCheckmark } from 'react-icons/fc'
import { toast } from 'react-hot-toast'
const AddCar = () => {

  const navigate = useNavigate()

  const [image, setImage] = useState('')

  const [inputs, setInputs] = useState({
    dealerName: '',
    carModel: '',
    carColor: '',
    carRegistrationNo: '',
    dealerPinCode: ''
  });

  const handleInputsChange = (e) => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    })
  };
  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
  };



  const handleCarAdd = async (e) => {
    e.preventDefault()
    const { dealerName, carModel, carColor, carRegistrationNo, dealerPinCode } = inputs
    if (dealerName === "") {
      toast.error('Dealer name is required')
    } else if (carModel === "") {
      toast.error('Car Model is required')
    } else if (carColor === "") {
      toast.error('Car Color required')
    } else if (carRegistrationNo === "") {
      toast.error('Reg no  is required')
    } else if (dealerPinCode === "") {
      toast.error('Pincode is required')
    } else {

      try {
        const formdata = new FormData()
        formdata.append('dealerName', dealerName)
        formdata.append('carModel', carModel)
        formdata.append('carColor', carColor)
        formdata.append('carRegistrationNo', carRegistrationNo)
        formdata.append('dealerPinCode', dealerPinCode)
        formdata.append('car_profile', image)

        const config = {
          "Content-Type": "multipart/form-data"
        }
        const res = await addCar(formdata, config)
        toast.success(`${carModel} added successfully`, { icon: <FcCheckmark /> })
        navigate('/')

      } catch (error) {
        toast.error(error)
      }

    }


  }

 



  return (

    <div className="carAdd">
      <Row className='d-flex align-items-center'>
        <Col lg={16}>
          <img src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Col>
        <Col lg={8} className='text-left'>
          <Form layout='vertical' className='formDiv'>
            <h1>Add Car</h1>
            <hr style={{ width: '60%', margin:'auto', color: '#567189' }} />

            <Form.Item name='dealerName' label='Car Dealer Name'>
              <Input
                name='dealerName'
                value={inputs.dealerName}
                placeholder='Enter dealer name'
                onChange={handleInputsChange} />
            </Form.Item>
            <Form.Item name='carModel' label='Car Model'>
              <Input
                name='carModel'
                value={inputs.carModel}
                placeholder='Enter car model'
                onChange={handleInputsChange} />
            </Form.Item>
            <Form.Item name='carColor' label='Car Color'>
              <Input
                name='carColor'
                value={inputs.carColor}
                placeholder='Enter color'
                onChange={handleInputsChange} />
            </Form.Item>
            <Form.Item name='carRegistrationNo' label='Car Reg No'>
              <Input
                name='carRegistrationNo'
                value={inputs.carRegistrationNo}
                placeholder='Enter car reg no'
                onChange={handleInputsChange} />
            </Form.Item>
            <Form.Item name='dealerPinCode' label='Dealer Pincode'>
              <Input
                name='dealerPinCode'
                value={inputs.dealerPinCode}
                placeholder='Enter dealer pincode'
                onChange={handleInputsChange} />
            </Form.Item>

            <Form.Item name='car_profile' label='Choose Image'>
              <Input className="custom-file-input" type='file' onChange={handleImage} />
            </Form.Item>

            <button className='btn' onClick={handleCarAdd}>Add</button>
            <Link to='/'>
               <button  className='btn'>Go Back</button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>

  )
}

export default AddCar