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

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  })

  let costsContent = <h2>в этом году нет расхода</h2>

  if(filteredCosts.length > 0){
    costsContent = filteredCosts.map((cost) => 
      <CostItem 
        key={cost.id}
        date={cost.date} 
        description={cost.description} 
        amount={cost.amount} />
    )
  }

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={yearChangeHandler}/>
      {costsContent}
    </Card>
  );
}

export default Costs;
