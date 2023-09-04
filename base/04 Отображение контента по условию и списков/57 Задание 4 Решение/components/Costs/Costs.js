import "./Costs.css";
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';
import CostList from "./CostList";

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (event) => {
    setSelectedYear(event);
  }

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  })

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={yearChangeHandler}/>
      <CostList costs={filteredCosts}/>
    </Card>
  );
}

export default Costs;
