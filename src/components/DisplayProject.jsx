import { useState } from "react";
import Tasks from "./Tasks";
import Button from "./Button";
import { toast } from "react-toastify";

const DisplayProject = ({ project, handleDeleteProject, setProjects }) => {
  const [addTask, setAddTask] = useState(false);
  const [inputTask, setInputTask] = useState("");

  const handleAddTaskUI = () => setAddTask(true);

  const handleSaveTask = () => {
    const trimmed = inputTask.trim();

    if (!trimmed) {
      toast.error("Please input task");
      return;
    }

    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === project.id ? { ...p, tasks: [...p.tasks, trimmed] } : p
      )
    );

    setInputTask("");
    setAddTask(false);
    toast.success("Task added");
  };

  const handleTaskInput = (e) => setInputTask(e.target.value);

  const hasTasks = project.tasks.length > 0;

  return (
    <section className="w-full bg-stone-200 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="mb-2 font-bold uppercase md:text-xl text-stone-800 px-2 py-4">
          {project.title}
        </h2>
        <Button
          onClick={() => handleDeleteProject(project.id)}
          className="mx-8 my-4 bg-stone-700 text-stone-50 hover:bg-red-700"
        >
          Delete
        </Button>
      </div>

      <div className="flex justify-between text-stone-700">
        <p className="w-2/3 px-2 py-2">{project.description}</p>
        <p className="w-1/4 px-2 py-2">{project.date}</p>
      </div>

      <hr className="border-b-2 border-solid border-stone-600" />

      <div className="px-2 py-4 space-y-4">
        {!addTask && !hasTasks && (
          <div>
            <p className="text-stone-800">
              There is no task available. Please add one.
            </p>
            <Button onClick={handleAddTaskUI} className="mt-2">
              Add Task
            </Button>
          </div>
        )}

        {addTask && (
          <div className="flex gap-4">
            <input
              type="text"
              className="bg-stone-300 rounded-md outline-none p-2 flex-1"
              value={inputTask}
              onChange={handleTaskInput}
              placeholder="Enter task"
            />
            <Button onClick={handleSaveTask} className="hover:bg-green-700">
              Save
            </Button>
          </div>
        )}

        {hasTasks && !addTask && (
          <>
            <Tasks
              tasks={project.tasks}
              setProjects={setProjects}
              projectId={project.id}
            />
            <Button onClick={handleAddTaskUI} className="mt-2">
              Add Task
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default DisplayProject;
