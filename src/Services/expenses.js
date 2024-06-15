import { ActionCreators } from "../app/expensesReducer";

export const getExpenses = async (dispatch) => {
  try {
    const expenses = [
      {
        id: 1,
        description: "Groceries",
        amount: 200,
      },
      {
        id: 2,
        description: "Travel",
        amount: 2000,
      },
      {
        id: 3,
        description: "Credit Card",
        amount: 1050.45,
      },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error!!");
  }
};
export const NewExpense = async (dispatch, expense) => {
  try {
    //micicing API Call
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log("Error!!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    dispatch(ActionCreators.editExpense(expense));
  } catch {
    console.log("Error!!");
  }
};
export const DeleteExpense = async (dispatch, expense) => {
  try {
    dispatch(ActionCreators.deleteExpense(expense));
  } catch {
    console.log("Error!!");
  }
};
