import {createContext,useEffect,useState} from 'react'

export const SubmissionContext = createContext()

export function SubmissionProvider({ children }) {
    const [submission, setSubmission] = useState({
      ipAddress:"",
      income:[],
      expenses:[],
      savings:[]
    })
    const [ipAddress, setIpAddress] = useState("")
    const baseUrl = "http://localhost:8000/api/v1/submissions"

 
    // Submit Budget
    const submitBudget = (data)=>{
        fetch(baseUrl+'/new', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res)=> {
          console.log("Submitted: ",res)
          if (res.status == 200) {
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
      }).then(data=>{
        console.log(data)
      
      }).catch((err)=> {
        console.log("Submission Failed: ",err)
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
    getAllBudgets:getAllBudgets
  }

  return (
    <SubmissionContext.Provider value={value}>
      {children}
    </SubmissionContext.Provider>
  )

}