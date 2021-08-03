import React, {useContext} from 'react'
import {SubmissionContext } from '../contexts/SubmissionProvider';

function Home() {
    const {ipAddress,submission,setSubmission} = useContext(SubmissionContext)
    const [itemType, setItemType] = useState("income")


    const addItem = (e)=>{ 
        e.preventDefault()



        console.log(e)
    }



    return (
        <div>
            {ipAddress}
            {/* {Testing Ground} */}
            <form onSubmit={addItem}>
                <label htmlFor="" >Name</label>
                <input type="text"  name="" />
                <input type="text" name="amount" />
                <button type="submit"> Submit</button>
            </form>

            <div>
                {
                    submission.income.map(income=>{
                      return <div> {income.name} <br/> {income.amount} </div>  
                    })
                }

            </div>







        </div>
    )
}

export default Home
