import "./Costs.css";
import CostItem from "./CostItem";
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (event) => {
    setSelectedYear(event);
  }

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={yearChangeHandler}/>
      {props.costs.map((cost) => 
        <CostItem 
          key={cost.id}
          date={cost.date} 
          description={cost.description} 
          amount={cost.amount} />
      )}
    </Card>
  );
}

export default Costs;
