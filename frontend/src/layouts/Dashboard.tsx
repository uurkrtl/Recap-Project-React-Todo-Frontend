import {Route, Routes} from "react-router-dom";
import TodoList from "../pages/TodoList.tsx";
import TodoDetail from "../pages/TodoDetail.tsx";

function Dashboard() {
    return (
        <div>
            <h1>Home Page</h1>
            <Routes>
                <Route exact path="/" element={<TodoList />} />
                <Route path="/todo/:id" element={<TodoDetail />} />
            </Routes>
        </div>
    );
}

export default Dashboard;