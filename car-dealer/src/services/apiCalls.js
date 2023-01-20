import axios from 'axios'

const url = `http://localhost:5000/api`

export const addCar = async (data,header) =>{
    try {
        const res = await axios.post(`http://localhost:5000/api/car/add`,data,header)
        return res.data
    } catch (error) {
        console.log(error)
    }
}



export const getAllCars = async (search,page) =>{
    try {
        const res = await axios.get(`http://localhost:5000/api/car?search=${search}&page=${page}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getCar = async (id) =>{
    try {
        const res = await axios.get(`http://localhost:5000/api/car/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}