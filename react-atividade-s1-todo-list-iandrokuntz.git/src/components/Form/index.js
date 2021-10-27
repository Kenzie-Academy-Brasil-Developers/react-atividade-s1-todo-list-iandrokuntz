import { useState } from "react";

const Form = ({addTodo}) => {

    const [userInput, setUserInput] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setUserInput("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter your task here" onChange={(evt) => setUserInput(evt.target.value)} value={userInput}/>
                <button onClick={() => addTodo(userInput)}>Add your task</button>
            </form>
        </div>
    )
}

export default Form;