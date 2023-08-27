import { useState } from 'react'

import './App.css'
import Todos from './Components/Todos'
import Todo from './Modals/Todo';

function App() {
  const [count, setCount] = useState(0)
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];

  return (
    <>
      <Todos items={todos}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
     
    </>
  )
}

export default App
