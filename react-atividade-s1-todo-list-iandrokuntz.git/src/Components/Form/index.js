import {useState} from "react";
import "./style.css"

function Form({list, setList}){

     const [userInput, setUserInput] = useState("");
  
     const handleChange = (e) => {
      setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setUserInput("");
    };

    const addTodo = (newTodo) => {
      setList([...list, newTodo])
  }

     return(
       <>
       <h1> Minhas Tarefas</h1>
       <form onSubmit={handleSubmit}>
         <input placeholder="Digite aqui, sua tarefa." onChange={handleChange} value={userInput}></input>
         <button onClick={() => addTodo(userInput)} type="submit">Adicionar Tarefa</button>
       </form>
       </>
     )
     
}

export default Form;