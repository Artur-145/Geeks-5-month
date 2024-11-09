import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store';
import './counter.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">{count}</h1>
      <div className="buttons-container">
        <button className="button" onClick={() => dispatch(increment(1))}>+1</button>
        <button className="button" onClick={() => dispatch(decrement(1))}>-1</button>
        <button className="button" onClick={() => dispatch(increment(10))}>+10</button>
        <button className="button" onClick={() => dispatch(decrement(10))}>-10</button>
        <button className="reset-button" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
