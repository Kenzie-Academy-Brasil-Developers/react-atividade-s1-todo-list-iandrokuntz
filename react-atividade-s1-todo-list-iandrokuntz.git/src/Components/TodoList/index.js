function TodoList({list, handleTodo}){

    return (

        <ul className="list">
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <p/>
              <button onClick={() => handleTodo(item)}> Realizar Tarefa </button>
            </li>
          ))}
        </ul>
    )
  }
  
  export default TodoList;