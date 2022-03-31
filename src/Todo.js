const Todo = ({removeTodo, id, item}) => {
    return (
        <ul className="p-0.5">
        <li className="inline pr-1.5">- {item}</li>
        <button className= "sm-white-100 hover:bg-gray-100 text-gray-800 font-semibold py-0.5 px-1 border border-gray-400 rounded shadow"
        onClick={() => removeTodo(id)}>X</button>
        </ul>
    )
}




export default Todo;
