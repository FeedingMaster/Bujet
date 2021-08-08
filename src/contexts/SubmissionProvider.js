import {createContext,useEffect,useState} from 'react'

export const SubmissionContext = createContext()

export function SubmissionProvider({ children }) {
    const [results, setResults] = useState()
    const [error, setError] = useState(null)
    const [submission, setSubmission] = useState({
      ipAddress:"",
      income:[],
      expenses:[],
      savings:[]
    })
    const [ipAddress, setIpAddress] = useState("")
    const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:8000/api/v1/submissions/"

  
    // Submit Budget
    const submitBudget = (data)=>{
        fetch(baseUrl+'/new', {
          method: 'post', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res)=> {
          return res.json()
        }).then((res)=>{
          console.log("Submitted: ",res)
          if (!res.status) {
            setError(res.message)
          }else{
          getCurrentBudget(res._id)
          setSubmission({
            ipAddress:"",
            income:[],
            expenses:[],
            savings:[]
          })
          }
        }).catch((err)=> {
          console.log("Submission Failed: ",err)
        });
     }


    //  Validate Submission

    // Get Overview

    // Get all Budget
    const getAllBudgets = (data)=>{
      fetch(baseUrl+'/', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response)=> {
        return response.json()
      }).catch((err)=> {
        console.log("Submission Failed: ",err)
      });
   }


    // Get all Budget
    function getCurrentBudget(id){
      fetch(baseUrl+'/'+id , {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res)=> {
        return res.json()
      }).then((data)=>{
        console.log(data)
          setResults(data)
      }).catch((err)=> {
        console.log("Request Failed: ",err)
      });
   }


    // Get User IP Address
     const getIP = ()=>{
        fetch('https://api.ipify.org').then((response)=> {
            return response.text();
          }).then(function(data) {
            setIpAddress(data)
            setSubmission({...submission,ipAddress:ipAddress})
          }).catch((err)=> {
            console.log("Submitted Failed to get IP address: "+err)
          })
     }




    //  Use Effect
    useEffect(() => {
        getIP()
    }, [ipAddress])


  const value = {
    ipAddress:ipAddress,
    submission:submission,
    setSubmission:setSubmission,
    submitBudget:submitBudget,
    getAllBudgets:getAllBudgets,
    results,
    error
  }

  return (
    <SubmissionContext.Provider value={value}>
      {children}
    </SubmissionContext.Provider>
  )

}