import React, {useState} from "react";

const TodoForm = ({addTodo}) => {
    const initialState = {
        item: "",
      }
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }))
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(initialState)
      }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Enter an item:</label>
            <input type = "text" 
            name = "item"
            placeholder = "enter to-do" 
            value = {formData.item}
            onChange={handleChange}
            />
            <button>Add To-Do!</button>
        </form>
    )
}







export default TodoForm;
