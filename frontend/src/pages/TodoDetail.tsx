import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import TodoService from "../services/TodoService.ts";
import {Button, Icon} from "semantic-ui-react";

function TodoDetail() {
    const { id } = useParams<string>();
    const [todo, setTodo] = useState<{ id: string; description: string; status: string; }>({ id: '', description: '', status: '' });

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
            <h2>Description: {todo.description}</h2>
            <p>ID: {todo.id}</p>
            <p>Status: {todo.status}</p>
            <Button as={Link} to={`/`} icon labelPosition='left'>
                Back
                <Icon name='left arrow' />
            </Button>
        </div>
    );
}

export default TodoDetail;