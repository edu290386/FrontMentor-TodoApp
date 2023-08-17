import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";

import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

const TaskFormat = (props) => {
  const { filterTask, handleDelete, handleDone, setFilterTask } = props;

  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;
    const oldIndex = filterTask.findIndex((task) => task.id === active.id);
    const newIndex = filterTask.findIndex((task) => task.id === over.id);
    const newOrder = arrayMove(filterTask, oldIndex, newIndex);
    setFilterTask(newOrder);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={filterTask}
        strategy={verticalListSortingStrategy}
        onDragStart
      >
        {filterTask.map((task) => (
          <div
            key={task.id}
            className=" bg-white dark:bg-[#2a2c3e] py-3 sm:py-4 flex justify-between items-center"
          >
            <div className="flex grow">
              <div
                onClick={() => handleDone(task.id)}
                className={`cursor-pointer w-5 h-5 mt-1 rounded-full border-gray-200 border mx-3  flex justify-center items-center ${
                  task.doneAt
                    ? "bg-gradient-to-br from-grad-first to-grad-second"
                    : ""
                }`}
              >
                <img className={`${task.doneAt ? "" : "dark:hidden"}`} src={check} alt="" />
              </div>
              <TaskCard  task={task} />
            </div>
            <div onClick={() => handleDelete(task.id)}>
              <img src={cross} className="mr-3 cursor-pointer w-3 " alt="" />
            </div>
          </div>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default TaskFormat;
