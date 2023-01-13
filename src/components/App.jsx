import { useState } from "react";


function App ()  {
const [count, setCount] = useState(0);

function increment () {
  setCount(count + 1)
}

function discrement () {
  setCount(count - 1)
}

  return (
    <div>
     <h1>Counter: {count}</h1>
     <button onClick={increment} className='btn btn-success'>Add</button>
     <button onClick={discrement} className='btn btn-danger'>Remove</button>
    </div>
 
    
  );
};

export default App;
