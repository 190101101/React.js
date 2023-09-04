import './CostForm.css';
import React, {useState} from 'react';

const CostForm = () => {

    const [userInput, setUserInput] = useState({
        description: '',
        amount: '',
        date: '',
    });

    const nameChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            name: event.target.value,
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value,
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value,
        });
    }

    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>сумма</label>
                    <input type="number" onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className="new-cost__control">
                    <label>дата</label>
                    <input type="date" onChange={dateChangeHandler} min='2023-01-01' min='2023-12-31'/>
                </div>
                <div className="new-cost__actions">
                    <button type='submit'>добавить расход</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;