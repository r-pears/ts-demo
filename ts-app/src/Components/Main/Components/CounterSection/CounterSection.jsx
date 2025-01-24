import React, { useState } from "react";

const CounterSection = () => {
  // State for counter
  const [count, setCount] = useState(0);

  // State for input text
  const [text, setText] = useState("");

  // State for toggle
  const [isToggled, setIsToggled] = useState(false);

  // State for list of items
  const [items, setItems] = useState([]);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const handleTextChange = (e) => setText(e.target.value);

  const toggle = () => setIsToggled(!isToggled);

  const addItem = () => {
    setItems([...items, text]);
    setText("");
  };

  return (
    <div>
      <h1>Counter Section</h1>

      <div>
        <h2>Counter: {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>

      <div>
        <h2>Text Input</h2>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={addItem}>Add Item</button>
      </div>

      <div>
        <h2>Toggle</h2>
        <button onClick={toggle}>{isToggled ? "ON" : "OFF"}</button>
      </div>

      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CounterSection;
