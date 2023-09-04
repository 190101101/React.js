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
      <CostItem 
        date={props.costs[0].date} 
        description={props.costs[0].description} 
        amount={props.costs[0].amount}>
      </CostItem>
      <CostItem 
        date={props.costs[1].date} 
        description={props.costs[1].description} 
        amount={props.costs[1].amount}>
      </CostItem>
      <CostItem 
        date={props.costs[2].date} 
        description={props.costs[2].description} 
        amount={props.costs[2].amount}>
      </CostItem>
    </Card>
  );
}

export default Costs;
