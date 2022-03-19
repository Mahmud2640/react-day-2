import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(10)
  const incraseCount = () => setCount(count + 1)
  const decraseCount = () => setCount(count - 1)
  return (
    <div className ="">
      <h1>Count: {count} </h1>
      <button onClick={incraseCount}>Increase</button>
      <button onClick={decraseCount}>Dicrease</button>
      
    </div>
  )
}

export default App;
