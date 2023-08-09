import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";

const Container = (props) => {
  const { taskList } = props;


  return (
    <div className="max-w-lg w-[90%] flex items-center justify-center text-very-dark-grayish-blue-lt text-sm sm:text-lg ">
      <section className="pt-4 overflow-hidden rounded-b-lg w-full ">
        <div className=" flex flex-col items-center overflow-hidden ">
          <article className="w-full rounded-t-lg overflow-hidden divide-y-2 ">
            {taskList.map((task) => (
              <div
                key={task.id}
                className="  bg-white py-3 sm:py-4 flex justify-between items-center"
              >
                <div className="flex ">
                  <div className="cursor-pointer w-5 h-5 mt-1 rounded-full border-gray-200 border mx-3 bg-gradient-to-br from-grad-first to-grad-second flex justify-center items-center ">
                    <img src={check} alt="" />
                  </div>
                  <div className="cursor-pointer line-through text-light-grayish-blue-lt">
                    {task.task}
                  </div>
                </div>
                <img src={cross} className="mr-3 cursor-pointer w-3" alt="" />
              </div>
            ))}
          </article>
          <article className=" border-t-2 border-gray-200 py-3 sm:py-4 px-3 bg-white w-full rounded-b-lg flex justify-between text-sm sm:text-base text-light-grayish-blue-lt ">
            <div className="shrink-0">{`${taskList.filter((task) => task.doneAt == null).length} items left`
            }</div>
            <div className=" text-base sm:text-lg font-lg w-full justify-center gap-x-2 hidden sm:flex">
              <div className=" cursor-pointer text-bright-blue">All</div>
              <div className=" cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
                Active
              </div>
              <div className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt ">
                Completed
              </div>
            </div>
            <div className="shrink-0">Clear Completed</div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Container;
