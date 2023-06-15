// src/App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increaseCount())}>+</button>
      <button onClick={() => dispatch(decreaseCount())}>-</button>
    </div>
  );
}

export default App;