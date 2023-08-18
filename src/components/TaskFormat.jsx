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
                className={`cursor-pointer w-5 h-5 mt-1 rounded-full  border mx-3 flex justify-center items-center ${
                  task.doneAt
                    ? "bg-gradient-to-br from-grad-first to-grad-second"
                    : ""
                }`}
              >
                <svg
                  className={`w-3 h-2 fill-none stroke-2 stroke-white ${
                    task.doneAt ? "dark:stroke-white" : "dark:stroke-[#2a2c3e]"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 4.304 3.696 7l6-6" />
                </svg>
              </div>
              <TaskCard task={task} />
            </div>
            <div className="mr-6" onClick={() => handleDelete(task.id)}>
            <svg className="cursor-pointer  w-4 h-4" xmlns="http://www.w3.org/2000/svg" ><path fill="#494C6B" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </div>
          </div>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default TaskFormat;
