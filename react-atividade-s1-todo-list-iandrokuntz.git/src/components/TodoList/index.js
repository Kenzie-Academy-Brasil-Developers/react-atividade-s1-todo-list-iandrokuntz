import "./index.css"

const TodoList = ({list, handleTodo}) => {


    return(
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                    <button onClick={() => handleTodo(item)}>Complete task</button>
                    </li>

                ))}
            </ul>
        </div>
    
    )
}

export default TodoList