import {createContext,useEffect,useState} from 'react'

export const SubmissionContext = createContext()

export function SubmissionProvider({ children }) {
    const [submission, setSubmission] = useState({
      income:[],
      expenses:[],
      savings:[]
    })
    const [ipAddress, setIpAddress] = useState("")
    const baseUrl = "http://localhost:8000/api/v1"

 
    // Submit Budget
    const submitBudget = (data)=>{
        fetch(baseUrl+'/new', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((response)=> {
          console.log("Submitted: "+response)
        }).catch((err)=> {
          console.log("Submitted Failed: "+err)
        });
     }


    //  Validate Submission

    // Get Overview

    // Get all Budget


    // Get User IP Address
     const getIP = ()=>{
        fetch('https://api.ipify.org').then((response)=> {
            return response.text();
          }).then(function(data) {
            setIpAddress(data)
            console.log(data);
          }).catch((err)=> {
            console.log("Submitted Failed to get IP address: "+err)
          });
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
  }

  return (
    <SubmissionContext.Provider value={value}>
      {children}
    </SubmissionContext.Provider>
  )

}