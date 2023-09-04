import { useSelector, useDispatch } from 'react-redux';
import classes from "./Counter.module.css";
import {counterActions} from "../store/index";

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterInvisible = useSelector((state) => state.isCounterInvisible);

  const incrementHandler = () => {
    dispatchFunction(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatchFunction(counterActions.decrement());
  };

  const increaceHandler = () => {
    dispatchFunction(counterActions.increace(100));
  };

  const toggleCounterHandler = () => {
    dispatchFunction(counterActions.setCounterVisibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isCounterInvisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaceHandler}>+10</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;
