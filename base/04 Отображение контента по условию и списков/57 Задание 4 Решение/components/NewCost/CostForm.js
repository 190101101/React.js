import './CostForm.css';
import React, {useState} from 'react';

const CostForm = (props) => {

    const [inputDescription, setInputDescription] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputDescription(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description:inputDescription,
            amount:inputAmount,
            date:new Date(inputDate),
        };

        props.onSaveCostData(costData);

        setInputDescription('');
        setInputAmount('');
        setInputDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>название</label>
                    <input type="text" value={inputDescription} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>сумма</label>
                    <input type="number" value={inputAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className="new-cost__control">
                    <label>дата</label>
                    <input type="date" value={inputDate} onChange={dateChangeHandler} min='2023-01-01' min='2023-12-31'/>
                </div>
                <div className="new-cost__actions">
                    <button type='submit'>добавить расход</button>
                    <button type='submit' onClick={props.onCancel}>отмена</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;