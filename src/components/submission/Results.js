import React, { useContext } from "react";
import { SubmissionContext } from "../../contexts/SubmissionProvider";
import incomeIcon from "../../assets/images/income_icon.svg";
import expenseIcon from "../../assets/images/expense_icon.svg";
import savingsIcon from "../../assets/images/savings_icon.svg";

function Results() {
  const { results } = useContext(SubmissionContext);
  return (
    <div className="content__container">
          <h1 className="results__title"> Total Monthly Balance</h1>
          <div className="results__balance">{results.totalBalance}</div>
          <div className="results__message">{results.budgetMessage}</div>

          <div className="results__item-list">
            <div className="results__item">
                <img src={incomeIcon} width="150" alt="" srcset="" />
                <div className="results__item-name">Income</div>
                <div className="results__item-total">{results.income}</div>
            </div>
            <div className="results__item">
                <img src={expenseIcon} width="150" alt="" srcset="" />
                <div className="results__item-name">Expenses</div>
                <div className="results__item-total"> {results.expense}</div>
            </div>
            <div className="results__item">
            <img src={savingsIcon} width="150" alt="" srcset="" />
                <div className="results__item-name">Savings</div>
                <div className="results__item-total" >{results.savings}</div>
            </div>
          </div>
     </div>
  );
}

export default Results;
