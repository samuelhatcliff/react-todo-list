import React, {useState} from "react";

const TodoForm = ({addTodo}) => {
    const initialState = {
        item: "",
      }
    const [formData, setFormData] = useState(initialState)
    const [isInvalid, setIsInvalid] = useState(true);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value === "") {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        setFormData(data => ({
          ...data,
          [name]: value
        }))
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isInvalid) {
        addTodo(formData);
        setFormData(initialState)
        setIsInvalid(true);
      }}
    return (
        <div className = "flex justify-center">
        <form onSubmit={handleSubmit} className = "">
            <label className = "flex justify-center" htmlFor="item">Enter an item:</label>
            <input type = "text" 
            name = "item"
            placeholder = "Enter a task" 
            value = {formData.item}
            onChange={handleChange}
            />
            <button className="flex items-center block bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Add To-Do!</button>
             {/* WHY DOES FLEX JUSTIFY-CENTER WORK FOR LABEL AND NOT BUTTON? */}
        </form>
        </div>
        
    )
}







export default TodoForm;
