import CarDealer from '../models/CarDealer.js'


export const addCar =async  (req,res) =>{
      const file  = req.file.filename
      const {dealerName,carModel,carColor,carRegistrationNo,dealerPinCode} = req.body

      if(!dealerName || !carModel || !carColor || !carRegistrationNo || !dealerPinCode){
        res.status(204).json('Please fill all fields')
      }

     try {
        const car = await CarDealer.findOne({dealerName})
        if(car)  res.status(204).json({
            status  :false,
            message : 'Car dealer already exists'
        })
        const carReg = await CarDealer.findOne({carRegistrationNo})
        if(car)  res.status(204).json({
            status  :false,
            message : 'CarRegistrationNo already exists'
        })

        const newCar = await new CarDealer({
            dealerName  :req.body.dealerName,
            carModel  :req.body.carModel,
            carColor  :req.body.carColor,
            carRegistrationNo  :req.body.carRegistrationNo,
            dealerPinCode  :req.body.dealerPinCode,          
            picture : file,           
         })
         await newCar.save()
         res.status(201).json({
            status : true,
            newCar,
            message : 'Car added successfully'

         })
     } catch (error) {
        res.status(500).json(error)
     }
}

export const getAllCars = async (req,res) =>{
    const search = req.query.search || ""
    const page = req.query.page || 1
    const PER_PAGE_ITEMS = 10
      

    const query = {
        carModel : {$regex:search,$options:"i"}        
    }
   
   
    try {
        const skip = (page - 1) * PER_PAGE_ITEMS // 1-1 * 5

        const count = await CarDealer.countDocuments(query)

        const carDealer = await CarDealer.find(query)
        .limit(PER_PAGE_ITEMS)
        .skip(skip)

        const pageCount = Math.ceil(count / PER_PAGE_ITEMS)  // 10/4 = 2.5
        res.status(200).json({
            Pagination : {
                count,
                pageCount
            },
            carDealer
        })   
    } catch (error) {
       res.status(400).json(error)   
    }
}

export const getCar = async (req,res) =>{
    try {
        const car = await CarDealer.findById(req.params.id)
        res.status(200).json(car)   
    } catch (error) {
       res.status(400).json(error)   
    }
}




export const deleteCar = async (req,res) =>{
    const {id} = req.params   
    try {        
        await carModel.findByIdAndDelete({_id:id})
        res.status(200).json('Car has been deleted')
        } catch (error) {
          res.status(400).json(error)   
    }
}




