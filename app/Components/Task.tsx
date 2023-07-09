"use client";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
  index: number;
}
const Task: React.FC<TaskProps> = ({ task, index }) => {
  const router = useRouter();
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false);
  const [titleToEdit, setTitleToEdit] = useState<string>(task.title);
  const [descriptionToEdit, setDescriptionToEdit] = useState<string>(
    task.description
  );
  const [statusToEdit, setStatusToEdit] = useState<string>(task.status);

  const handleEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      title: titleToEdit,
      description: descriptionToEdit,
      status: task.status,
    });

    setModalOpenEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setModalOpenDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td>{index + 1}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td className="text-gray-400">{task.status}</td>
      <td className="flex gap-5 justify-center">
        <FaRegEdit
          onClick={() => setModalOpenEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={20}
        />
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form method="dialog" onSubmit={handleEditTask}>
            <h2 className="text-xl font-semibold">Edit Task</h2>
            <div className="modal-action grid grid-cols-1 justify-items-center space-y-4">
              <input
                value={titleToEdit}
                onChange={(e) => setTitleToEdit(e.target.value)}
                type="text"
                required
                placeholder="Title"
                className="input input-bordered w-full ml-2 input-info "
              />
              <textarea
                value={descriptionToEdit}
                onChange={(e) => setDescriptionToEdit(e.target.value)}
                required
                className="textarea textarea-info  w-full"
                placeholder="Description"
              ></textarea>
              <input
                value={statusToEdit}
                onChange={(e) => setStatusToEdit(e.target.value)}
                type="text"
                defaultValue={"todo"}
                placeholder="Title"
                className="input input-bordered input-info w-full hidden"
              />

              <button type="submit" className="btn text-white btn-info">
                Update
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setModalOpenDelete(true)}
          cursor="pointer"
          className="text-red-400"
          size={20}
        />
        <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete}>
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="btn bg-red-400 text-white"
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
      <td>
        <button className="btn btn-sm btn-outline btn-success">
          Task done
        </button>
      </td>
    </tr>
  );
};

export default Task;
