"use client";
import { BsJournalPlus } from "react-icons/bs";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("todo");

  const handleNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(title, description, status);
    await addTodo({
      id: "5",
      title: title,
      description: description,
      status: status,
    });
    setTitle("");
    setDescription("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-info w-full"
      >
        Add Task <BsJournalPlus className="" size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form method="dialog" onSubmit={handleNewTask}>
          <h2 className="text-xl font-semibold">Add Your Task</h2>
          <div className="modal-action grid grid-cols-1 justify-items-center space-y-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              required
              placeholder="Title"
              className="input input-bordered w-full ml-2 input-info "
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="textarea textarea-info  w-full"
              placeholder="Description"
            ></textarea>
            <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              type="text"
              defaultValue={"todo"}
              placeholder="Title"
              className="input input-bordered input-info w-full hidden"
            />

            <button type="submit" className="btn btn-info">
              Add to List
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
