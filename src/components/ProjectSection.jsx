import Button from "./Button";

const ProjectSection = ({
  onStartAddProject,
  projects,
  onProjectSelection,
  selectedProjectId,
}) => {
  return (
    <nav className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={onStartAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600"
        >
          + Add Project
        </Button>

        <ul className="mt-4">
          {projects.length === 0 ? (
            <li className="text-stone-400 mt-4">No projects available.</li>
          ) : (
            projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => onProjectSelection(project.id)}
                  className={`w-full text-left px-2 py-1 rounded-sm my-1 ${
                    selectedProjectId === project.id
                      ? "bg-stone-800 text-stone-200 font-semibold"
                      : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                  }`}
                  aria-current={
                    selectedProjectId === project.id ? "true" : undefined
                  }
                >
                  {project.title}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default ProjectSection;
