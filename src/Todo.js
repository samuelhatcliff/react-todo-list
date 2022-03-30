const Todo = ({removeTodo, id, item}) => {
    return (
        <div>
        <li>{item}</li>
        <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}




export default Todo;
