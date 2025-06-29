import { useRef } from "react";
import Inputs from "./Inputs";
import { toast } from "react-toastify";

const NewProject = ({ setProjects, setSelectedProjectId }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleAddProject() {
    const newProject = {
      id: crypto.randomUUID(),
      title: title.current.value.trim(),
      description: description.current.value.trim(),
      date: dueDate.current.value,
      tasks: [],
    };

    if (!newProject.title || !newProject.description || !newProject.date) {
      toast.error("Please fill out all fields.");
      return;
    }

    setProjects((prev) => [...prev, newProject]);
    setSelectedProjectId(undefined);
    toast.success("Project added successfully!");
  }

  function handleCancel() {
    setSelectedProjectId(undefined);
  }

  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={handleCancel}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleAddProject}
          className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
        >
          Save
        </button>
      </div>

      <Inputs ref={title} label="Title" />
      <Inputs ref={description} label="Description" isTextArea />
      <Inputs ref={dueDate} type="date" label="Due Date" />
    </div>
  );
};

export default NewProject;
