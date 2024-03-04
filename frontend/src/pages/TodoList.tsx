import {useEffect, useState} from "react";
import TodoService from "../services/TodoService.ts";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
    Grid, GridColumn,
    GridRow
} from "semantic-ui-react";
import TodoAdd from "./TodoAdd.tsx";
import { Link } from "react-router-dom";

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
            <TodoAdd/>
            <Grid>
                <GridRow>

                    <GridColumn width={5}>
                        <h2>Todo</h2>
                        <CardGroup>
                            {todos.filter((todo: { id: string; description: string; status: string }) => todo.status === 'OPEN')
                                .map((todo: { id: string; description: string; status: string }) => (
                                <Card key={todo.id}>
                                    <CardContent>
                                        <CardHeader>{todo.description}</CardHeader>
                                        <CardDescription>{todo.status}</CardDescription>
                                    </CardContent>
                                    <CardContent extra>
                                        <div className='ui three buttons'>
                                            <Button as={Link} to={`/todo/${todo.id}`} basic color='blue'>
                                                Details
                                            </Button>
                                            <Button as={Link} to={`/todo/update/${todo.id}`} basic color='red'>
                                                Edit
                                            </Button>
                                            <Button basic color='green'>
                                                Advance
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </CardGroup>
                    </GridColumn>

                    <GridColumn width={5}>
                        <h2>Doing</h2>
                        <CardGroup>
                            {todos.filter((todo: { id: string; description: string; status: string }) => todo.status === 'IN_PROGRESS')
                                .map((todo: { id: string; description: string; status: string }) => (
                                    <Card key={todo.id}>
                                        <CardContent>
                                            <CardHeader>{todo.description}</CardHeader>
                                            <CardDescription>{todo.status}</CardDescription>
                                        </CardContent>
                                        <CardContent extra>
                                            <div className='ui three buttons'>
                                                <Button as={Link} to={`/todo/${todo.id}`} basic color='blue'>
                                                    Details
                                                </Button>
                                                <Button as={Link} to={`/todo/update/${todo.id}`} basic color='red'>
                                                    Edit
                                                </Button>
                                                <Button basic color='green'>
                                                    Advance
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </CardGroup>
                    </GridColumn>

                    <GridColumn width={5}>
                        <h2>Done</h2>
                        <CardGroup>
                            {todos.filter((todo: { id: string; description: string; status: string }) => todo.status === 'DONE')
                                .map((todo: { id: string; description: string; status: string }) => (
                                    <Card key={todo.id}>
                                        <CardContent>
                                            <CardHeader>{todo.description}</CardHeader>
                                            <CardDescription>{todo.status}</CardDescription>
                                        </CardContent>
                                        <CardContent extra>
                                            <div className='ui three buttons'>
                                                <Button as={Link} to={`/todo/${todo.id}`} basic color='blue'>
                                                    Details
                                                </Button>
                                                <Button as={Link} to={`/todo/update/${todo.id}`} basic color='yellow'>
                                                    Edit
                                                </Button>
                                                <Button basic color='red'>
                                                    Delete
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </CardGroup>
                    </GridColumn>

                </GridRow>
            </Grid>
        </div>
    );
}

export default TodoList;