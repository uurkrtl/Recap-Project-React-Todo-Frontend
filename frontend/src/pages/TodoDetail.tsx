import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import TodoService from "../services/TodoService.ts";

function TodoDetail() {
    const { id } = useParams<string>();
    const [todo, setTodo] = useState<{ id: number; description: string; status: string; }>({ id: 0, description: '', status: '' });

    useEffect(() => {
        if (id) {
            const todoService = new TodoService();
            todoService.getByIdTodo(id).then((response) => {
                setTodo(response.data);
            });
        }
    });

    return (
        <div>
            <h1>Todo Detail</h1>
            <p>ID: {todo.id}</p>
            <p>Description: {todo.description}</p>
            <p>Status: {todo.status}</p>
        </div>
    );
}

export default TodoDetail;