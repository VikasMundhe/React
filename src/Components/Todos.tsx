import Todo from '../Modals/Todo';
import TodoItem from './ToDoItem';
import classes from './Todos.module.css'

const Todos:React.FC<{items:Todo[]; onRemoveToDoEvent:(id:string)=>void}> = ({items,onRemoveToDoEvent})=>{


    return(
        <ul className={classes.todos}>
            {items.map(item=>
                <TodoItem key={item.id} item={item} onRemoveToDo={onRemoveToDoEvent.bind(null,item.id)}/>
                )
}
        </ul>
    )
}

export default Todos;