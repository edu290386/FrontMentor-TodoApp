import TitleApp from "../components/TitleApp";
import Container from "../components/Container";
import FormTask from "../components/FormTask";

import { useState, useEffect } from "react";
import { get, post, update, destroy } from "../services/Services";
import { TaskModel } from "../models/TaskModel";

const Home = () => {
  let [taskList, setTaskList] = useState([]);

  const getTaskList = async () => {
    const dataTask = await get();
    const tasksModels = dataTask.map((task) => {
      return new TaskModel(
        task.id,
        task.task,
        task.createdAt,
        task.doneAt,
        task.deletedAt
      );
    });
    setTaskList(tasksModels);
  };

  const addTaskList = async (text) => {
    const newTask = new TaskModel(null, text);
    await post(newTask);
    await getTaskList();
  };

  const doneTask = async (id) => {
    const bodyFilter = taskList.find((task) => task.id === id);
    let body = bodyFilter.doneAt;
    body = body === null ? { doneAt: new Date() } : { doneAt: null };
    await update(id, body);
    await getTaskList();
  };

  const deleteTask = async (id) => {
    await destroy(id);
    await getTaskList();
  };

  const updateAllTasks = async () => {
    const filteredTask = taskList.filter((task) => task.doneAt !== null);
    filteredTask.forEach(async (task) => await deleteTask(task.id));
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="max-w-lg w-full absolute top-10 sm:top-16 flex flex-col items-center justify-center sm:text-xl ">
        <TitleApp />
        <FormTask addTaskList={addTaskList} />
        <Container
          taskList={taskList}
          doneTask={doneTask}
          deleteTask={deleteTask}
          updateAllTasks={updateAllTasks}
        />
      </div>
    </div>
  );
};

export default Home;
