import {Component} from 'react';
import {connect} from 'react-redux';
import classes from "./Counter.module.css";

class Counter extends Component{
  incrementHandler = () => {
    this.props.increment();
  };
  
  decrementHandler = () => {
    this.props.decrement();
  };
  
  render(){
    return (
      <main className={classes.counter}>
        <h1>Счётчик</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>-</button>
          <button onClick={this.incrementHandler.bind(this)}>+</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type:'increment'}),
    decrement: () => dispatch({type:'decrement'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
