import Form from "./components/Form"
import TodoList from "./components/TodoList";
import { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([])

  const addTodo = (newTodo) => {

    if(newTodo !== ""){

      setList([...list, newTodo])
    }
  }

  const handleTodo = (tarefa) => {

    return setList(list.filter((item) => item !== tarefa))

  }

  return (

    <div className="App">

      <h1>Welcome to your tasks</h1>
      <h3>use the form to add tasks</h3>
      <Form addTodo={addTodo}/>
      <TodoList list={list} handleTodo={handleTodo}/>

    </div>
  );
}

export default App;
