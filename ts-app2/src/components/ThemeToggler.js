import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function ThemeToggler() {
  const { state, dispatch } = useContext(GlobalContext);
  
  return (
    <div style={{ marginTop: '1rem' }}>
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;