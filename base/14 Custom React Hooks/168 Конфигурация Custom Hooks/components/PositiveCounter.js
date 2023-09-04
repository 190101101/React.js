import useCounter from "../hooks/useCounter";
import Card from "./Card";

const PositiveCounter = () => {
  
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default PositiveCounter;
