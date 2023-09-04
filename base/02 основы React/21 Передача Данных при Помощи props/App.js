import CostItem from "./components/CostItem";

const App = () => {

  const costs = [
    {
      date: new Date(2023, 6, 17),
      description: 'Холодельник',
      amount: '999.99',
    },
    {
      date: new Date(2023, 6, 23),
      description: 'MacBook',
      amount: '1254.72',
    },
    {
      date: new Date(2023, 7, 15),
      description: 'джинсы',
      amount: '49.99',
    },
  ];

  return (
    <div>
      <h1>Hello react</h1>
      <CostItem 
        date={costs[0].date} 
        description={costs[0].description} 
        amount={costs[0].amount}>
      </CostItem>
      <CostItem 
        date={costs[1].date} 
        description={costs[1].description} 
        amount={costs[1].amount}>
      </CostItem>
      <CostItem 
        date={costs[2].date} 
        description={costs[2].description} 
        amount={costs[2].amount}>
      </CostItem>
    </div>
  );
}

export default App;
