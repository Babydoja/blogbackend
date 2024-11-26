const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const router = require('../Route/Route')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({  origin:["http://localhost:5173"] }))
app.use(router)
mongoose.connect(process.env.MONGO_URL)
.then((req,res)=>{
   app.listen(PORT,()=>{
    console.log("Connected to MongoDB")
    console.log(`Server is running on port ${PORT}`)
   })
   app.get('/',(req,res)=>{
        res.send('server home page')
   })
})
.catch((err)=>{
    console.log(err);
})

