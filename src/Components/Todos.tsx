import Todo from '../Modals/Todo';

const Todos:React.FC<{items:Todo[]}> = ({items})=>{


    return(
        <ul>
            {items.map(item=><li key={item.id}>{item.text}</li>)
}
        </ul>
    )
}

export default Todos;