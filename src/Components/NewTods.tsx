import { useRef } from "react";


const NewTodos:React.FC<{onAddToDo:(text:string) =>void }>= ()=>{
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:React.FormEvent)=>{
            event.preventDefault();
            const enteredText = todoTextInputRef.current!.value;
            if(enteredText.trim().length ===0)
            {
                return;
            }
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">ToDo Text</label>
            <input type="text" id="text"  ref ={todoTextInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodos ;