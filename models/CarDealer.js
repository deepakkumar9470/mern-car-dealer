import mongoose from 'mongoose'
// car registration no, car colour, car model, dealer name, dealer pin code


const CarDealerSchema = new mongoose.Schema({

    dealerName: {
        type: String,
        require: true,
        trim: true,
        unique : true
    },

    carModel: {
        type: String,
        require: true,
        trim: true
    },

    carColor: {
        type: String,
        require: true,
        trim: true
    },
    carRegistrationNo: {
        type: Number,
        require: true,
        unique : true
    },
    dealerPinCode: {
        type: Number,
        require: true,
    },
    picture: {
        type: String,
    },


},{timestamps : true})

const CarDealer = mongoose.model('Car', CarDealerSchema)

export default CarDealer