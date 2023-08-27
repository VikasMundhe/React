import Todo from '../Modals/Todo';
import TodoItem from './ToDoItem';

const Todos:React.FC<{items:Todo[]}> = ({items})=>{


    return(
        <ul>
            {items.map(item=>
                <TodoItem item={item}/>
                )
}
        </ul>
    )
}

export default Todos;