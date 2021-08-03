const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submissionsSchema = new Schema({
    ipAddress: {
        type:String,
        required:true
    },
    alias:String,
    income:[
            
     ],
    savings:[
            
     ],
    expenses:[
            
     ]
},{timestamps:true})

const submissions = mongoose.model('submissions',submissionsSchema)

module.exports = submissions


