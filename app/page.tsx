import { getAllTasks } from "@/api/api";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

export default async function Home() {
  const tasks = await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Day Task app</h2>
        <AddTask />
      </div>
      <TaskList tasks={tasks} />
    </main>
  );
}
