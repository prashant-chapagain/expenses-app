import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div style={{ width: "60%", margin: 'auto' }}>
      <h3>New Expense </h3>
      <ExpenseForm/>
      <h3 style={{border:'1px solid blue'}}></h3>
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div>
  );
}

export default App;
