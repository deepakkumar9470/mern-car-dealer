import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { Row, Col  } from 'antd'
import Banner from '../../components/Banner/Banner'
import { getAllCars } from '../../services/apiCalls'
import { BsSearch } from 'react-icons/bs'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import PaginationComponent from '../../components/Pagination/PaginationComponent'


const Home = () => {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
 

  useEffect(() => {
    setLoading(true)
    const fetchCars = async () => {
      try {
        const res = await getAllCars(search, page)
        setCars(res.carDealer)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }


    }
    fetchCars()
  }, [search, page])


 
  //Pagination Previous
  const paginatePrevious = () => {

    setPage(() => {
      if (page === 1) return page;
      return page - 1
    })
  }

  //Pagination Next
  const paginateNext = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1
    })
  }



  return (
    <Layout>
      <Banner />
      <div className="input_Div">

        <input type='search'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search a car..' />
        <BsSearch className='icon' color='#FF8B13' />         
      </div>
      <h2 style={{ marginTop: '50px', color: 'orangered' }}>Cars Collection 2023</h2>
      <hr style={{ width: '22%', margin:'auto', color: '#567189' }} />

      {
        loading ? <Loader /> :
          <>
            <Row className='mt-5' justify='center' gutter={10}>
              {
                cars.map((item, i) => (
                  <Col lg={5} sm={20} xs={24}>
                    <div className='car p-2 car_sd'>
                      <img className='carImg' src={`http://localhost:5000/uploads/${item.picture}`} alt="carimg" />
                      <div key={item._id} className='carContent d-flex m-2 align-items-center justify-content-between p-2'>

                        <div>
                          <p>{item.dealerName}</p>
                          <p>{item.carModel}</p>
                          <p>{item.carRegistrationNo}</p>
                          <p>{item.carColor}</p>
                          <p>{item.dealerPinCode}</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                          <button className='btn'>Book Now</button>
                          
                          <Link to={`/car/${item._id}`}>
                            <FaEye
                              color='#13005A'
                              style={{ marginLeft: '10px', cursor: 'pointer' }}
                              />
                            </Link>
                         
                        </div>

                      </div>
                    </div>
                  </Col>
                ))
              }
            
            </Row>
          </>
      }

     
      <PaginationComponent
        page={page}
        setPage={setPage}
        pageCount={pageCount}
        paginatePrevious={paginatePrevious}
        paginateNext={paginateNext} />
    </Layout>
  )
}

export default Home


