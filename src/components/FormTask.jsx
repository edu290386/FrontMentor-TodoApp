import { useState } from "react";

const FormTask = (props) => {
  const { addTaskList } = props;
  const [textTask, setTextTask] = useState({});

  const handleInput = (e) => {
    let { name, value } = e.target;
    setTextTask({ [name]: value });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (textTask.tasks === undefined) return;
    addTaskList(textTask.tasks);
    setTextTask("");
  };

  return (
    <div>
      <form className="w-screen max-w-lg text-center" onSubmit={addTask}>
        <input
          type="text"
          className="bg-white w-[90%] mb-1 sm:mb-4 py-2 sm:py-4 pl-3 rounded "
          placeholder="Create a new todo..."
          onChange={handleInput}
          name="tasks"
          value={textTask.tasks || ""}
        />
      </form>
    </div>
  );
};

export default FormTask;
