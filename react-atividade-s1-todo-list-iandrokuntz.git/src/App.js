import './App.css';
import {useState} from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

  const [list, setList] = useState([]);
  
  const handleTodo = (item) => {

    return setList(list.filter((tarefa) => tarefa !== item))
  }


  return (
    <div className="App">
      
      <Form list={list} setList={setList}/>
      <TodoList list={list} handleTodo={handleTodo}/>

    </div>
  );
}

export default App;
