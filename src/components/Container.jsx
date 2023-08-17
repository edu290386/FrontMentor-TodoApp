import { useState, useEffect } from "react";
import Statistics from "../components/Statistics";
import TaskFormat from "./TaskFormat";

const Container = (props) => {
  const { taskList, doneTask, deleteTask, updateAllTasks } = props;
  const [filterTask, setFilterTask] = useState([]);
  useEffect(() => setFilterTask(taskList), [taskList]);

  const displayTask = (value) => {
    setFilterTask(
      value === 1
        ? taskList.filter((task) => task.createdAt)
        : value == 2
        ? taskList.filter((task) => !task.doneAt)
        : taskList.filter((task) => task.doneAt)
    );
  };

  const handleDone = (value) => {
    console.log(value);
    doneTask(value);
  };

  const handleDelete = (value) => {
    console.log(value);
    deleteTask(value);
  };

  const clearCompleted = () => {
    updateAllTasks();
  };

  return (
    <div className="max-w-lg w-[90%] flex items-center justify-center text-very-dark-grayish-blue-lt text-sm sm:text-lg ">
      <section className="pt-4 overflow-hidden rounded-b-lg w-full ">
        <div className=" flex flex-col items-center overflow-hidden ">
          <article className="w-full rounded-t-lg overflow-hidden divide-y-2 ">
            <TaskFormat
              filterTask={filterTask}
              handleDelete={handleDelete}
              handleDone={handleDone}
              setFilterTask={setFilterTask}
            />
          </article>
          <article className=" border-t-2 border-gray-200 py-3 sm:py-4 px-3 bg-white dark:bg-[#2a2c3e] w-full rounded-b-lg flex justify-between text-sm sm:text-base text-light-grayish-blue-lt ">
            <div className="shrink-0 dark:text-dark-grayish-blue">{`${
              filterTask.filter((task) => task.doneAt == null).length
            } items left`}</div>
            <div className=" text-base sm:text-lg font-lg w-full justify-center gap-x-2 hidden sm:flex">
              <div
                onClick={() => displayTask(1)}
                className=" cursor-pointer text-bright-blue"
              >
                All
              </div>
              <div
                onClick={() => displayTask(2)}
                className=" cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt"
              >
                Active
              </div>
              <div
                onClick={() => displayTask(3)}
                className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt "
              >
                Completed
              </div>
            </div>
            <div onClick={clearCompleted} className="shrink-0 cursor-pointer dark:text-dark-grayish-blue">
              Clear Completed
            </div>
          </article>
          <Statistics displayTask={displayTask} />
        </div>
      </section>
    </div>
  );
};

export default Container;
