import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TaskListProps {
  tasks: ITask[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
