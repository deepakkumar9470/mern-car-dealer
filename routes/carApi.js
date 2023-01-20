import express from 'express'
const router  = express.Router()
import {addCar,getAllCars,getCar,deleteCar } from '../controllers/carController.js'

import upload from '../multerfileupload/fileUpload.js'


//@  /api/car/add
router.post('/add',upload.single('car_profile') ,addCar)

//@  /api/car
router.get('/', getAllCars)

//@  /api/car/:id
router.get('/:id', getCar)


//@ /api/car/:id
router.delete('/:id', deleteCar)


export default router