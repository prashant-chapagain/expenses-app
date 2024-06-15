import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div style={{ width: "60%", margin: 'auto' }}>
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div>
  );
}

export default App;
