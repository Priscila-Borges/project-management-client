import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";


function ProjectListPage() {
    const [projects, setProjects] = useState([]);

    const getAllProjects = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/projects`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getAllProjects();
    }, []);


    return (
        <div className="ProjectListPage">

            <AddProject refreshProjects={getAllProjects} />

            {projects.map((project) => (
                <ProjectCard key={project._id} {...project} />
            ))}

        </div>
    );
}

export default ProjectListPage;