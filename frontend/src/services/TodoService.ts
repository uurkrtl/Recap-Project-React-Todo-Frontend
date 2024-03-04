import axios from "axios";

export default class TodoService {
    getTodos() {
        return axios.get('/api/todo');
    }

    getByIdTodo(id: string) {
        return axios.get('/api/todo/' + id);
    }

    addTodo(todo: { description: string; status: string }) {
        return axios.post('/api/todo', todo);
    }

    updateTodo(todo: { id: string; description: string; status: string }) {
        return axios.put(`http://localhost:8080/api/todo/${todo.id}/update`, todo);
    }

}