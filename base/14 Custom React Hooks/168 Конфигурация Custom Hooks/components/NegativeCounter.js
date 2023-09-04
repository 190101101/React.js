import useCounter from "../hooks/useCounter";
import Card from "./Card";

const NegativeCounter = () => {
  
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default NegativeCounter;
