// to load .env file
require('dotenv').config()

// import router
const router = require('./Routes/routes')

// import db
require('./DB/connection')

// import  express server
const express = require('express')

// import cors
const cors = require('cors')

// create express server
const pfServer = express()

// use cors 
pfServer.use(cors())

// parse json data using server app
pfServer.use(express.json({}))

// use router
pfServer.use(router)

// customise port for server app
const PORT = 4000 || process.env.PORT 

// to run server app
pfServer.listen(PORT, () => {
    console.log(`Server is Running at port : ${PORT}`)
    })

// resolve request to localhost:4000
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started !! </h1>`)

})
