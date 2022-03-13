// рекомендуемий подход для создания компонентов или узать хуки
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count+1)
  }
  function decrement() {
    setCount(count-1)
  }
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter
