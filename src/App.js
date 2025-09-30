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
// app.use(cors({  origin:["http://localhost:5173","https://blog-steel-one-91.vercel.app/"] }))
// app.use(router)

app.use(cors())
    // {
    //     origin:["http://localhost:5173"]
    // }

app.use('/api/blog',router)
mongoose.connect(process.env.MONGO_URL)


.then((req,res)=>{
   app.listen(PORT,()=>{
    console.log("Connected to MongoDB")
    console.log(`Server is running on port ${PORT}`)
   })
   app.get('/',(req,res)=>{
        res.send(`
            <div>
                <h2>Server Home Page</h2>
                <p>All HTTP methods are supported</p>
                <p>GET: To fetch all blogs use this route: <a href="https://blogbackend-1-11nd.onrender.com/api/blog/getall_blog">/getall_blog</a></p>
                <p>GET: To fetch a single blog use this route: <a href="https://blogbackend-1-11nd.onrender.com/api/blog/getsingle_blog/:id">/getsingle_blog/:id</a></p>
                <p>POST: To create a blog use this route: <a href="https://blogbackend-1-11nd.onrender.com/api/blog/create_blog">/create_blog</a></p>
                <p>PUT: To edit a blog use this route: <a href="https://blogbackend-1-11nd.onrender.com/api/blog/edit_blog/:id">/edit_blog/:id</a></p>
                <p>DELETE: To delete a blog use this route: <a href="https://blogbackend-1-11nd.onrender.com/api/blog/delete_blog/:id">/delete_blog/:id</a></p>
            </div>
        `);
   })
})
.catch((err)=>{
    console.log(err);
})




