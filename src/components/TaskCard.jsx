import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={
        task.doneAt
          ? "cursor-pointer line-through text-light-grayish-blue-lt grow dark:text-dark-grayish-blue"
          : "cursor-pointer text-dark-grayish-blue dark:text-light-grayish-blue-lt grow"
      }
    >
      <div className="grow">{task.task}</div>
    </div>
  );
};

export default TaskCard;
