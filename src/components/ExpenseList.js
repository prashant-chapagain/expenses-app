import { useEffect,React } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getExpenses } from "../Services/expenses";
import { Button, Row, Col } from "react-bootstrap";

export default() =>{
    const dispatch = useDispatch();
    const expenses = useSelector(state=> state.expensesReducer.expenses );

    useEffect(()=>{
        getExpenses(dispatch);
    },[]);
    return expenses.map(e=>
        <div style={{marginBottom:'1rem'}}>
        <ListRow expense={e}/>
        </div>
    );
}
const ListRow = ({expense}) => {
    return <div>
        <Row>
            <Col>{expense.description}</Col>
            <Col>{expense.amount}</Col>
            <Button variant="warning" style={{width:'4rem'}}>Edit</Button>
        </Row>
        <hr/>
    </div>
}