import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectPage = ({ onStartAddProject }) => {
  return (
    <section
      aria-label="No project selected"
      className="mt-24 text-center max-w-lg w-full mx-auto px-4"
    >
      <img
        className="w-20 h-20 object-contain mx-auto"
        src={noProjectImage}
        alt="No project selected illustration"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <Button onClick={onStartAddProject} className="mt-6">
        Create New Project
      </Button>
    </section>
  );
};

export default NoProjectPage;
