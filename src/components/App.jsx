import { useState } from "react";


function compInitCount () {
  console.log('some process...');
  return Math.trunc(Math.random() * 20)
}

function App ()  {
// const [count, setCount] = useState(0);
// const [count, setCount] = useState(compInitCount());
const [count, setCount] = useState(() => {
  return compInitCount()
});

const [state, setState ] = useState({
  title: 'Counter',
  date: Date.now()
})


function increment () {
  setCount((prevCount) => {
    return prevCount + 1
  })
  // setCount(prev => prev + 1)
}

function discrement () {
  setCount(count - 1)
}

 function updateTitle () {
  setState(prev => {
    return {
      ...prev,
      title: 'new name'
    }
  })
 }

  return (
    <div>
     <h1>Counter: {count}</h1>
     <button onClick={increment} className='btn btn-success'>Add</button>
     <button onClick={discrement} className='btn btn-danger'>Remove</button>
     <button onClick={updateTitle} className='btn btn-default'>Change name</button>

     <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
 
    
  );
};

export default App;
