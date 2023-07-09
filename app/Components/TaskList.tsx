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
            <th>#</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Task task={task} key={task.id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
