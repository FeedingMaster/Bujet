const submissions = require("../../models/submissions")


//Return All submissionss
const  submissions_index  = async (req,res)=>{
    res.send("routes connected")
    console.log("routes connected")
}


// Create New submissions
const  submissions_new  = (req,res)=>{
    res.send("routes connected")
    console.log("routes connected")
} 

 
// Requires only the submissions ID to show to a 
const  submissions_return_single  = (req,res)=>{
    res.send("routes connected")
    console.log("routes connected")
}


// Export Submission To .CV file
const  export_single  = (req,res)=>{
    res.send("routes connected")
    console.log("routes connected")
}


module.exports = {
    submissions_index,
    submissions_new,
    submissions_return_single,
    export_single
}