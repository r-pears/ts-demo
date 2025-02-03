import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';
import Counter from './components/Counter';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const { state } = useContext(GlobalContext);
  
  // Dynamically set a style based on the theme
  const appStyle = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '2rem',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <h1>React Context + useReducer Example</h1>
      <Counter />
      <ThemeToggler />
    </div>
  );
}

export default App;