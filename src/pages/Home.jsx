import TitleApp from "../components/TitleApp";
import Container from "../components/Container";
import FormTask from "../components/FormTask";
import { useState, useEffect } from "react";
import { get, post } from "../services/Services";
import { TaskModel } from "../models/TaskModel";

const Home = () => {
  const [taskList, setTaskList] = useState([]);

  const getTaskList = async () => {
    const dataTask = await get();
    console.log(dataTask);
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
  console.log(taskList);

  const addTaskList = async (text) => {
    const newTask = new TaskModel(null, text);
    await post(newTask);
    await getTaskList();
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="max-w-lg w-full absolute top-10 sm:top-16 flex flex-col items-center justify-center sm:text-xl ">
        <TitleApp />
        <FormTask addTaskList={addTaskList} />
        <Container taskList={taskList} />
      </div>
    </div>
  );
};

export default Home;
