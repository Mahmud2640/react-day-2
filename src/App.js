import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExtranalUsers></ExtranalUsers>

      
    </div>
  );
}


function ExtranalUsers (){
  const [users, setUsers] = useState([])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>Extranal Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
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
