import { useSelector, useDispatch } from 'react-redux';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterInvisible = useSelector((state) => state.isCounterInvisible);

  const incrementHandler = () => {
    dispatchFunction({type: 'increment'});
  };

  const decrementHandler = () => {
    dispatchFunction({type: 'decrement'});
  };

  const increaceHandler = () => {
    dispatchFunction({type: 'increace', number: 10});
  };

  const toggleCounterHandler = () => {
    dispatchFunction({type: 'visibility'});
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
