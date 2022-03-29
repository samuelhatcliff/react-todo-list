import React, {useState} from "react";

const TodoForm = () => {
    const [todo, setTodo] = useState("first-todo")
    const handleChange = (e) => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`added todo, ${todo}`)
        setTodo("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" 
            placeholder = "enter to-do" 
            value = {todo}
            onChange={handleChange}
            />
            <button>Add To-Do!</button>
        </form>
    )
}







export default TodoForm;
