import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 8000
import cb from './db/db.js'
import carRoute from './routes/carApi.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/uploads', express.static('uploads'))
app.use('/files', express.static('./public/files'))
app.use('/api/car', carRoute)


app.use(express.static("./car_dealer/build"));
  
app.get('*', (req, res) => {
    res.sendFile("/car_dealer/build/index.html"),(err)=>{
        res.status(500).send(err)
    };
});


cb()

app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(PORT , ()=>{
    console.log(`Server started at post http://localhost:${PORT}`)
})
