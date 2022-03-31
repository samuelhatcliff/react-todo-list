import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo"

import TodoForm from "./TodoForm";

function TodoList () {
    const INITIAL_STATE = [
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, 
        {...newTodo, id: uuid()}])
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }
    return (
        <div className = "bg-slate-100 h-100 w-100 shadow-xl rounded">
            <div className="px-6 py-2.5">
            <h1 className="flex justify-center text-5xl font-bold">To-Do List</h1>
            <TodoForm addTodo={addTodo}/>
            <div 
            className="grid justify-items-start max-w-sm rounded overflow-hidden"
            >
                {todos.map(({id, item}) =>
                <Todo removeTodo = {removeTodo} id= {id} item={item} key={id} />
                )}
            </div>
            </div>
        </div>
    )
}



export default TodoList;

