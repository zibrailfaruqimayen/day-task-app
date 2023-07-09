import { ITask } from "@/types/tasks";
import React from "react";

interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td className="text-gray-400">{task.status}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task;
