import React, {useContext,useEffect,useState} from 'react'
import {SubmissionContext } from '../contexts/SubmissionProvider'

function Home() {
    const {ipAddress,submission,setSubmission,submitBudget,getAllBudgets} = useContext(SubmissionContext)
    const [itemType, setItemType] = useState("income")
    const [navState, setNavState] = useState(0)
    const [item, setItem] = useState({name:"",value:""})
    const typeList = ["income", "expenses","savings"]

    const addItem = (e)=>{ 
        e.preventDefault()
        let newSubmission = submission
        newSubmission[itemType].push(item)
        setSubmission(newSubmission)
        setItem({name:"",value:""})
    }
    
    const submitForm =()=>{
        // validate
        
        // send
        submitBudget(submission)
        
    }

    const nav = (num)=>{
        let navigation =  navState +  num
        if (navigation < 0 || navigation > 2) return
        setNavState(navigation)
        setItemType(typeList[navigation])
    }

    const removeItem = (index)=>{
        let newSubmission = submission
        let type = newSubmission[itemType]
        type.splice(index, 1);
        setSubmission(newSubmission)
        setItem({name:"",value:""}) //
        console.log(submission)
    }

    const updateValue = (e)=>{
        let prop = e.target.name
        setItem({...item, [prop]:e.target.value})
    }

    return (
        <div>
            {itemType}
            <form onSubmit={addItem}>
                <label htmlFor="" >Name</label>
                <input type="text" required value={item.name} onChange={updateValue} name="name" />
                <input type="number" required value={item.value} onChange={updateValue} name="value" />
                <button type="submit">+</button>
            </form>

            <div>
                { submission[itemType].map((listItem, i )=>{
                      return <div key={i}> {listItem.name} <br/> {listItem.value} <span onClick={()=>(removeItem(i))}>x</span></div>  
                    }) 
                }
            </div>
            <br/>
            <div>
                <button onClick={()=>nav(-1)} >Back</button>
                <button onClick={()=>nav(1)}>Next</button>
                <button onClick={submitForm}>Submit Budget</button>
            </div>

            <br/>
            <button onClick={getAllBudgets}>View All Budgets</button>


        </div>
    )
}

export default Home
