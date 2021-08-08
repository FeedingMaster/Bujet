import React, {useContext}from 'react'
import { SubmissionContext } from "../../../contexts/SubmissionProvider";

function StepIndicator({navState}) {
    const { results } = useContext(SubmissionContext);
    return (
        <div className="indicator">
            <ul>
                {  !results ? <><li className={(navState === 0 ) ? "active":""}>Income</li>
                <li className={(navState === 1 ) ? "active":""}>Expense</li>
                <li className={(navState === 2 ) ? "active":""}>Savings</li></>: 
                <li className={(navState === 2 ) ? "active":""}>Summary</li>
                }
            </ul>
        </div>
    )
}

export default StepIndicator
