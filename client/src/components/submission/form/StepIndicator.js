import React from 'react'

function StepIndicator({navState}) {
    return (
        <div className="indicator">
            <ul>
                <li className={(navState === 0 ) ? "active":""}>Income</li>
                <li className={(navState === 1 ) ? "active":""}>Expense</li>
                <li className={(navState === 2 ) ? "active":""}>Savings</li>
            </ul>
        </div>
    )
}

export default StepIndicator
