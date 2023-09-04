import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 6, 17),
    description: 'Холодельник',
    amount: '999.99',
  },
  {
    id: 'c2',
    date: new Date(2023, 6, 23),
    description: 'MacBook',
    amount: '1254.72',
  },
  {
    id: 'c3',
    date: new Date(2023, 7, 15),
    description: 'джинсы',
    amount: '49.99',
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(previoues => {
      return [cost, ...previoues];
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
