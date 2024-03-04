import axios from "axios";

export default class TodoService {
    getTodos() {
        return axios.get('/api/todo');
    }

    getByIdTodo(id: string) {
        return axios.get('/api/todo/' + id);
    }
}