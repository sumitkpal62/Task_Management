import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectPage from "./components/NoProjectPage";
import ProjectSection from "./components/ProjectSection";

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
    content = <NewProject />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectPage onStartAddProject={handleStartAppProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSection onStartAddProject={handleStartAppProject} />
      {content}
    </main>
  );
}

export default App;
