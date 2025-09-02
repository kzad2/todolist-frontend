import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/auth/Login.jsx";
import Register from "../page/auth/Register.jsx";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../page/dashboard/Dashboard.jsx";
import TodoList from "../page/dashboard/TodoList.jsx";
import TodoListDetail from "../page/dashboard/TodoListDetail.jsx";
import Profile from "../page/dashboard/Profile.jsx";
import Setting from "../page/dashboard/Setting.jsx";
import Plan from "../page/dashboard/Plan.jsx";

function AppRoute() {
    return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/todo-list-detail/:id" element={<TodoListDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/plans" element={<Plan />} />
      </Route>
    </Routes>
    );
}

export default AppRoute;