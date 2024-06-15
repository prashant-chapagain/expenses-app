import { React, useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { NewExpense } from "../Services/expenses";
import { useDispatch } from "react-redux";

export default () => {
  const descriptions = ["Groceries", "Credit Card", "Travels", "Food"];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          //create
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          //edit
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
              <Button variant="danger"> Delete </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="default"> Cancel </Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};
