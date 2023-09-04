import React, {useState} from 'react';
import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-cost">
            {!isFormVisible && <button onClick={inputCostDataHandler}>добавить новый расход</button>}
            {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler}/>}
        </div>
    );
}

export default NewCost;