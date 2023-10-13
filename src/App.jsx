// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"; "./pages/HomePage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TasksPage/>} />
            <Route path="/profile" element={<h1>Perfil</h1>} />
            <Route path="/add-task" element={<h1>Update tarea</h1>} />
            <Route path="/task/:id" element={<h1>Id de tarea</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
