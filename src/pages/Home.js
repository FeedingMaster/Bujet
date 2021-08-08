import React, { useContext, useState } from "react";
import Header from "../components/Header";
import StepIndicator from "../components/submission/form/StepIndicator";
import { SubmissionContext } from "../contexts/SubmissionProvider";
import bin from "../assets/images/delete_bin.svg";
import incomeIcon from "../assets/images/income_icon.svg";
import expenseIcon from "../assets/images/expense_icon.svg";
import savingsIcon from "../assets/images/savings_icon.svg";
import Results from "../components/submission/Results";

function Home() {
  const { submission, setSubmission, submitBudget, getAllBudgets } =
    useContext(SubmissionContext);
  const [itemType, setItemType] = useState("income");
  const [navState, setNavState] = useState(0);
  const [item, setItem] = useState({ name: "", value: "" });
  const typeList = ["income", "expenses", "savings"];
  const itemImageList = [incomeIcon, expenseIcon, savingsIcon];

  const addItem = (e) => {
    e.preventDefault();
    let newSubmission = submission;
    newSubmission[itemType].push(item);
    setSubmission(newSubmission);
    setItem({ name: "", value: "" });
  };

  const submitForm = () => {
    // validate

    // send
    submitBudget(submission);
  };

  const nav = (num) => {
    let navigation = navState + num;
    if (navigation < 0 || navigation > 2) return;
    setNavState(navigation);
    setItemType(typeList[navigation]);
  };

  const removeItem = (index) => {
    let newSubmission = submission;
    let type = newSubmission[itemType];
    type.splice(index, 1);
    setSubmission(newSubmission);
    setItem({ name: "", value: "" }); //
    console.log(submission);
  };

  const updateValue = (e) => {
    let prop = e.target.name;
    setItem({ ...item, [prop]: e.target.value });
  };

  return (
    <div>
      <div className="container">
        <Header />
        <div className="content">
          <div className="content__container">
            <StepIndicator navState={navState} />

            <div className="typeHeader">
              <h2>Add New {typeList[navState]}</h2>
              <p>Add monthly salary & other income, etc</p>
            </div>
            <form onSubmit={addItem}>
              <div className="addItems">
                <div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={typeList[navState] + " Name"}
                      value={item.name}
                      onChange={updateValue}
                      name="name"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="number"
                      placeholder="Amount"
                      required
                      value={item.value}
                      onChange={updateValue}
                      name="value"
                    />
                  </div>
                  <button class="addBtn" type="submit">
                    +
                  </button>
                </div>
              </div>
            </form>

            <div className="itemsList">
              {submission[itemType].map((listItem, i) => {
                return (
                  <div class="item" key={i}>
                    <div className="item-name">
                      <span>
                        <img
                          src={itemImageList[navState]}
                          width="40"
                          alt=""
                          srcset=""
                        />
                      </span>
                      <span>{listItem.name}</span>
                    </div>
                    <div className="item-value">
                      {" "}
                      ${listItem.value}
                      <span class="item-delete" onClick={() => removeItem(i)}>
                        <img src={bin} alt="" srcset="" />
                      </span>
                    </div>
                  </div>
                );
              })}

              { (submission[itemType].length  === 0) ? <div className="no-item"> You have no {typeList[navState]} Item(s) Yet. :(</div>:"" }

            </div>
            {/* <button onClick={getAllBudgets}>View All Budgets</button> */}
          </div>
          <div className="btn-container">
            <div className="navBtns">
              <div>
                {navState !== 0 ? (
                  <button onClick={() => nav(-1)}>Back</button>
                ) : (
                  ""
                )}
              </div>
              <div>
                {navState !== 2 ? (
                  <button onClick={() => nav(1)}>Next</button>
                ) : (
                  <button onClick={submitForm}>Submit Budget</button>
                )}
              </div>
            </div>
          </div>
          <Results/>
        </div>
      </div>
    </div>
  );
}




export default Home;
