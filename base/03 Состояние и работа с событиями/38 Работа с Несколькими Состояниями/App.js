import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

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
      <NewCost/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
