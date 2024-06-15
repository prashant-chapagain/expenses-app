import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../Services/expenses";
import { Button, Row, Col } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

export default () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  useEffect(() => {
    getExpenses(dispatch);
  }, []);
  return expenses.map((e) => (
    <div key={e.id} style={{ marginBottom: "1rem" }}>
      <ListRow expense={e} />
    </div>
  ));
};
const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>Rs.{expense.amount}</Col>
        <Button
          variant="warning"
          onClick={() => setIsEditing(!isEditing)}
          style={{ width: "4rem" }}
        >
          Edit
        </Button>
      </Row>
      <hr />
    </div>
  );
};
