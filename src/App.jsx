// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
("./pages/HomePage.jsx");
import { AuthProvider } from "./context/AuthContext.jsx";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-task" element={<TaskForm />} />
            <Route path="/task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
