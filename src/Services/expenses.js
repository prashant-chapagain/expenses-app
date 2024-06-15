import { ActionCreators } from "../app/expensesReducer"

export const getExpenses = async(dispatch) => {
    try{
        const expenses = [
            {
            id:1 ,description:'Groceries', amount:200
        },
        {
            id:2 ,description:'Travel', amount:2000
        },
        {
            id:3 ,description:'Credit Card', amount:1050.45
        }
    ];
    dispatch(ActionCreators.setExpenses(expenses));

    }catch{
        console.log("Error!!")
    }
}