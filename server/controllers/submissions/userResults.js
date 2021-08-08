userResults = (results)=>{
    
    const sumTotal = (item)=>{
        var sum = 0;
        for (var i = 0; i < item.length; i++) {  sum += Number(item[i].value)}
        return sum
    }

    let income = sumTotal(results.income)
    let expenses = sumTotal(results.expenses)
    let savings = sumTotal(results.expenses)
    let totalBalance = (income - expenses)  -  savings
    
    let budgetMessage

    if (expenses < (income + savings)) {
        budgetMessage =  "You have a good handle of budget" 
    }else if(expenses == (income + savings)){
        budgetMessage =  "You need to cut back on your expenses " 
    }else if(expenses < (income + savings)){
        budgetMessage =  "Display: Your budget is very tight. " 
    }

    return  {
        totalBalance,
        income,
        expenses,
        savings,
        budgetMessage
    }

}


module.exports = userResults