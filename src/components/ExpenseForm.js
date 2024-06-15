import { React, useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DeleteExpense, EditExpense, NewExpense } from "../Services/expenses";
import { useDispatch } from "react-redux";

export default ({ expense, setIsEditing }) => {
  const descriptions = ["Groceries", "Credit Card", "Travels", "Food"];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else setIsNewExpense(true);
  }, [expense]);
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //create
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          //edit
          EditExpense(dispatch, {
            id: expense.id,
            description: description,
            amount: amount,
          });
          setIsEditing(false);
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="100"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        <div style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button
                onClick={() => DeleteExpense(dispatch, expense)}
                variant="danger"
                style={{ marginRight: "1rem" }}
              >
                {" "}
                Delete{" "}
              </Button>
              <Button
                variant="success"
                type="submit"
                style={{ marginRight: "1rem" }}
              >
                Save
              </Button>
              <Button
                variant="Secondary"
                onClick={() => setIsEditing(false)}
                style={{ marginRight: "1rem" }}
              >
                {" "}
                Cancel{" "}
              </Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};
