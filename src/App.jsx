import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectPage from "./components/NoProjectPage";
import ProjectSection from "./components/ProjectSection";
import { Slide, ToastContainer } from "react-toastify";
import DisplayProject from "./components/DisplayProject";

function App() {
  const [projects, setProjects] = useState([
    {
      id: "ID1",
      title: "Title1",
      description: "description1",
      date: "date1",
      tasks: ["task1", "task2", "task3"],
    },
    {
      id: "ID2",
      title: "Title2",
      description: "description2",
      date: "date2",
      tasks: ["task4", "task5", "task6"],
    },
    {
      id: "ID3",
      title: "Title3",
      description: "description3",
      date: "date3",
      tasks: ["task7", "task8", "task9"],
    },
  ]);

  const [selectedProjectId, setSelectedProjectId] = useState(undefined);

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  function handleStartAppProject() {
    setSelectedProjectId(null);
  }

  function handleOnSelectProject(id) {
    setSelectedProjectId(id);
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setSelectedProjectId(undefined);
  }

  let content;
  if (selectedProjectId === null) {
    content = (
      <NewProject
        setProjects={setProjects}
        setSelectedProjectId={setSelectedProjectId}
      />
    );
  } else if (selectedProjectId === undefined) {
    content = <NoProjectPage onStartAddProject={handleStartAppProject} />;
  } else if (selectedProject) {
    content = (
      <DisplayProject
        project={selectedProject}
        handleDeleteProject={handleDeleteProject}
        setProjects={setProjects}
      />
    );
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectSection
        projects={projects}
        onStartAddProject={handleStartAppProject}
        onProjectSelection={handleOnSelectProject}
        selectedProjectId={selectedProjectId}
      />
      {content}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </main>
  );
}

export default App;
