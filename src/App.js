import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const changeCount = (e) => {
    const sign = e.target.id;
    if (sign === "+") {
      setCount((preValue) => preValue + 1);
    } else {
      setCount((preValue) => preValue - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button id="+" onClick={changeCount}>
        Increment
      </button>
      <button id="-" onClick={changeCount}>
        Decrement
      </button>
    </div>
  );
}

export default App;
