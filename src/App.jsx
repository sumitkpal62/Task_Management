import NewProject from "./components/NewProject";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSection />
      <NewProject />
    </main>
  );
}

export default App;
