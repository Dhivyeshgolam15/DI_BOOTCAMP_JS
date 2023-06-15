// src/components/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increaseCount())}>+</button>
      <button onClick={() => dispatch(decreaseCount())}>-</button>
    </div>
  );
}

export default Counter;