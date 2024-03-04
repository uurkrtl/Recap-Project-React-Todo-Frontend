import {useEffect, useState} from "react";
import TodoService from "../services/TodoService.ts";

function TodoList() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const todoService = new TodoService();
        todoService.getTodos().then((response) => {
            setTodos(response.data);
        });
    });
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo: { id: string; description: string; status:string }) => (
                    <li key={todo.id}>{todo.description} - Status: {todo.status} - <a href={`/todo/${todo.id}`}>View</a></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;