import Todo from "../Modals/Todo";
import classes from './ToDoItem.module.css';

const TodoItem:React.FC<{item:Todo;onRemoveToDo:()=>void}> = ({item,onRemoveToDo}) => {

        return(
            <li className={classes.item} key={item.id} onClick={onRemoveToDo}>{item.text}</li>
        )
}

export default TodoItem;
