const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Connected Successfully With pfServer")
}).catch(err=>{
    console.error("Error Connecting to MongoDB Atlas:" +err)
})