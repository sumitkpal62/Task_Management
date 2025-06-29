import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectPage from "./components/NoProjectPage";
import ProjectSection from "./components/ProjectSection";
import { Slide, ToastContainer, toast } from "react-toastify";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAppProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject setProjectsState={setProjectsState} />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectPage onStartAddProject={handleStartAppProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSection
        projects={projectsState.projects}
        onStartAddProject={handleStartAppProject}
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
