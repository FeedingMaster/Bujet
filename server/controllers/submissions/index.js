const submissions = require("../../models/submissions")
const parseUserResults = require("./userResults")


//Return All submissionss
const  submissions_index  = async (req,res)=>{
    const filter = {};
    await submissions.find(filter).then(data=>{
        res.send(data) 
    }).catch(err=>{
        console.log(err)
    })
}


// Create New submissions
const  submissions_new  = (req,res)=>{
    const submission = new submissions(req.body)
    submission.save()
    .then((result)=>{
        res.type('json')
        res.send(result)
        console.log("successfully Submitted")
    })  
    .catch((err)=>{
        console.log(err)
    }) 

} 

 
// Requires only the submissions ID to show the current results
const  submissions_return_single  = (req,res)=>{
    const submissionId = req.params.id

    submissions.findOne({_id:submissionId})
    .then((result)=>{
        res.send(parseUserResults(result))
    }).catch(err=>{
        console.log(err)
    })
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