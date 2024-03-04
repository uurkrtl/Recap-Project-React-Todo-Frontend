import {Route, Routes} from "react-router-dom";
import TodoList from "../pages/TodoList.tsx";
import TodoDetail from "../pages/TodoDetail.tsx";
import TodoAdd from "../pages/TodoAdd.tsx";

function Dashboard() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<TodoList />} />
                <Route path="/todo/:id" element={<TodoDetail />} />
                <Route path="/todo/add" element={<TodoAdd />} />
            </Routes>
        </div>
    );
}

export default Dashboard;