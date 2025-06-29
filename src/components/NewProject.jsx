import { useRef } from "react";
import Inputs from "./Inputs";
import { toast, ToastContainer } from "react-toastify";

const NewProject = ({ setProjectsState }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function addNewProject() {
    const project = {
      id: Math.random(),
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (
      project.title == "" ||
      project.description == "" ||
      project.dueDate == ""
    ) {
      toast.error("Enter the data");
      return;
    }

    setProjectsState((prevState) => {
      const currState = {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, project],
      };
      return currState;
    });
    toast.success("Project added successfully");
  }

  function cancelButton() {
    setProjectsState((prevState) => {
      const currState = {
        ...prevState,
        selectedProject: undefined,
      };
      return currState;
    });
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={cancelButton}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={addNewProject}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <Inputs ref={title} label={"Title"} />
        <Inputs ref={description} label={"Description"} isTextArea />
        <Inputs ref={dueDate} type="date" label={"Due Date"} />
      </div>
    </>
  );
};

export default NewProject;
