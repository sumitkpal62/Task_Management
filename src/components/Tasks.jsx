import Button from "./Button";
import { toast } from "react-toastify";

const Tasks = ({ tasks, setProjects, projectId }) => {
  function handleOnDelete(taskToDelete) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task !== taskToDelete),
            }
          : project
      )
    );

    toast.success("Task deleted");
  }

  return (
    <section>
      <h2 className="mb-2 text-stone-700 font-semibold">Tasks</h2>
      <ul>
        {tasks.length === 0 ? (
          <p className="text-stone-500 text-sm">No tasks yet.</p>
        ) : (
          tasks.map((task, idx) => (
            <li
              key={idx}
              className="w-2/3 flex justify-between py-2 px-3 bg-stone-300 rounded-sm my-1 text-stone-800"
            >
              <span>{task}</span>
              <Button
                onClick={() => handleOnDelete(task)}
                className="bg-stone-600 text-stone-200 hover:bg-red-700 px-3 py-1 text-xs"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Tasks;
