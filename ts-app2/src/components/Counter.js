import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Counter() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}

export default Counter;