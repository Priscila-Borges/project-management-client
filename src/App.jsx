import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import EditProjectPage from "./pages/EditProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <div className="App">


      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
      </Routes>

    </div>
  );
}

export default App;