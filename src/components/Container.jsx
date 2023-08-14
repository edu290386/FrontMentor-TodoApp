import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { useState, useEffect } from "react";
import Statistics from "../components/Statistics";

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
    deleteTask(value)
  };

  const clearCompleted = () => {
    updateAllTasks()
  };

  console.log(taskList)
  console.log(filterTask)
  
  return (
    <div className="max-w-lg w-[90%] flex items-center justify-center text-very-dark-grayish-blue-lt text-sm sm:text-lg ">
      <section className="pt-4 overflow-hidden rounded-b-lg w-full ">
        <div className=" flex flex-col items-center overflow-hidden ">
          <article className="w-full rounded-t-lg overflow-hidden divide-y-2 ">
            {filterTask.map((task) => (
              <div
                key={task.id}
                className="  bg-white py-3 sm:py-4 flex justify-between items-center"
              >
                <div className="flex ">
                  <div
                    onClick={() => handleDone(task.id)}
                    className={`cursor-pointer w-5 h-5 mt-1 rounded-full border-gray-200 border mx-3  flex justify-center items-center ${
                      task.doneAt
                        ? "bg-gradient-to-br from-grad-first to-grad-second"
                        : ""
                    }`}
                  >
                    <img src={check} alt="" />
                  </div>
                  <div
                    className={
                      task.doneAt
                        ? "cursor-pointer line-through text-light-grayish-blue-lt"
                        : "cursor-pointer "
                    }
                  >
                    {task.task}
                  </div>
                </div>
                <div onClick={() => handleDelete(task.id)}>
                  <img src={cross} className="mr-3 cursor-pointer w-3" alt="" />
                </div>
              </div>
            ))}
          </article>
          <article className=" border-t-2 border-gray-200 py-3 sm:py-4 px-3 bg-white w-full rounded-b-lg flex justify-between text-sm sm:text-base text-light-grayish-blue-lt ">
            <div className="shrink-0">{`${
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
            <div onClick={clearCompleted} className="shrink-0 cursor-pointer">Clear Completed</div>
          </article>
          <Statistics displayTask={displayTask} />
        </div>
      </section>
    </div>
  );
};

export default Container;
