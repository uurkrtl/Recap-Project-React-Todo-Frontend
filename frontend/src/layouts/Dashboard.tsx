import {Route, Routes} from "react-router-dom";
import TodoList from "../pages/TodoList.tsx";
import TodoDetail from "../pages/TodoDetail.tsx";
import TodoAdd from "../pages/TodoAdd.tsx";
import TodoUpdate from "../pages/TodoUpdate.tsx";
import Navbar from "./Navbar.tsx";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<TodoList />} />
                <Route path="/todo/:id" element={<TodoDetail />} />
                <Route path="/todo/add" element={<TodoAdd />} />
                <Route path="/todo/update/:id" element={<TodoUpdate />} />
            </Routes>
        </div>
    );
}

export default Dashboard;