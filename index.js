const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()
const dotenv = require('dotenv')


// Config ===================================
dotenv.config();
const port = process.env.PORT || 8000


// Middleware ==============================
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())



// Connect to  Mongo DB   =================
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology:true})
    .then((result)=>{

        console.log("connected to db")
        //Start server
        app.listen(port, () => {
            console.log(`Server Started, listening at http://localhost:${port}`)
        })

    })
    .catch((err) => console.log(err))



// Routes ================================