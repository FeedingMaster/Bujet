import e from 'cors';
import React, {useContext,useState} from 'react'
import {SubmissionContext } from '../contexts/SubmissionProvider';

function Home() {
    const {ipAddress,submission,setSubmission} = useContext(SubmissionContext)
    const [itemType, setItemType] = useState("income")
    const [item, setItem] = useState({name:"",value:""})

    const addItem = (e)=>{ 
        e.preventDefault()
        let newSubmission = submission

        newSubmission[itemType].push(item)
        setSubmission(newSubmission)
        setItem({name:"",value:""})
    }

    const removeItem = (index)=>{
        let newSubmission = submission
        let type = newSubmission[itemType]
        type.splice(index, 1);
        setSubmission(newSubmission)
    }

    const updateValue = (e)=>{
        let prop = e.target.name
        setItem({...item, [prop]:e.target.value})
    }

    const changeInput = (e)=>{
        setItemType(e.target.value)

    }

    return (
        <div>
            {ipAddress}
            {/* {Testing Ground} */}
            <div onChange={changeInput}>
            <input type="radio" name="input" value="income" id="income" />
            <input type="radio" name="input" value="expenses" id="expenses" />
            <input type="radio" name="input"value="savings"   id="savings" />
            </div>
            {itemType}
            <form onSubmit={addItem}>
                <label htmlFor="" >Name</label>
                <input type="text" value={item.name} onChange={updateValue} name="name" />
                <input type="text" value={item.value} onChange={updateValue} name="value" />
                <button type="submit">+</button>
            </form>

            <div>
                { itemType ? submission[itemType].map((listItem, i )=>{
                      return <div key={i}> {listItem.name} <br/> {listItem.value} <span onClick={()=>(removeItem(i))}>x</span></div>  
                    }) : ""
                }
            </div>
        </div>
    )
}

export default Home
