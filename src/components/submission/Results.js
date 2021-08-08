import React ,{useContext} from 'react'
import {SubmissionContext} from "../../contexts/SubmissionProvider"

function Results() {
    const {results} = useContext(SubmissionContext)
    return (
        <div>
           { results ? <>
            {results.income}<br/>
            {results.expenses}<br/>
            {results.savings}<br/>
            {results.budgetMessage}<br/>
            {results.totalBalance}<br/>
            </> : "No Results Yet" }
        </div>
    )
}

export default Results
