import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodos:React.FC<{onAddToDo:(text:string) =>void }>= (props)=>{
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event:React.FormEvent)=>{
            event.preventDefault();
            const enteredText = todoTextInputRef.current!.value;
            if(enteredText.trim().length ===0)
            {
                return;
            };
            props.onAddToDo(enteredText);
    };
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">ToDo Text</label>
            <input type="text" id="text"  ref ={todoTextInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodos ;