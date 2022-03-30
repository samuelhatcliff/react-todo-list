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
        <div>
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo}/>
            <div>
                {todos.map(({id, item}) =>
                <Todo removeTodo = {removeTodo} id= {id} item={item} key={id} />
                )}
            </div>
        </div>
    )
}



export default TodoList;

