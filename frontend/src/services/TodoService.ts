import axios from "axios";

export default class TodoService {
    getTodos() {
        return axios.get('http://localhost:8080/api/todo');
    }
}