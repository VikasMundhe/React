import { useState } from 'react'

import './App.css'
import Todos from './Components/Todos'
import Todo from './Modals/Todo';
import NewTodos from './Components/NewTods';

function App() {
  const [count, setCount] = useState(0)
  const [todos,setTodos] = useState<Todo[]>([]);
    

  const addToDoHandler = (toToText:string) =>{
    setTodos((preTodos)=>{
        return preTodos.concat(new Todo(toToText));
    });
    
  };

  const removeToDoHandler = (todoId:string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=>todo.id!=todoId)
      })
  };
  return (
    <>
      <NewTodos onAddToDo={addToDoHandler}/>
      <Todos items={todos} onRemoveToDoEvent={removeToDoHandler}/>
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>*/}
     
    </>
  )
}

export default App
