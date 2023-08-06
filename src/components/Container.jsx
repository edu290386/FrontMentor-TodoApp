import cross from "../assets/icon-cross.svg"


const Container = () => {
  return (
    <div className="flex justify-center text-very-dark-grayish-blue-lt text-sm ">
      <section className="m-auto w-[90%] absolute top-16 pt-4 overflow-hidden rounded-b-lg ">
        <div className=" flex flex-col items-center overflow-hidden">
          <input
            type="text"
            className="bg-white w-full my-4 py-3 rounded mx-5"
            placeholder="Create a new todo..."
          />
          <article className="w-full rounded-t-lg overflow-hidden divide-y-2">
            <div className="  bg-white py-3 flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full border border-very-light-grayish-blue w-[15px] h-[15px] mx-3 cursor-pointer"></div>
                <div>Complete online JavaScript course</div>
              </div>
              <img src={cross} className="w-[10px] mr-3" alt="" />
            </div>
            <div className="  bg-white py-3 flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full border border-very-light-grayish-blue w-[15px] h-[15px] mx-3"></div>
                <div>Complete online JavaScript course</div>
              </div>
              <img src={cross} className="w-[10px] mr-3" alt="" />
            </div>
            <div className="  bg-white py-3 flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full border border-gray-300 w-[15px] h-[15px] mx-3"></div>
                <div>Complete online JavaScript course</div>
              </div>
              <img src={cross} className="w-[10px] mr-3" alt="" />
            </div>
          </article>
          <article className=" border-t-2 border-gray-200 py-3 px-3 bg-white w-full rounded-b-lg flex justify-between text-xs text-light-grayish-blue-lt">
            <div>5 items left</div>
            <div>Clear Completed</div>
          </article>
        </div>
        <div className="my-4 text-lg font-lg w-full bg-white flex justify-center gap-x-4 py-3 rounded-lg ">
          <div className=" cursor-pointer text-bright-blue">All</div>
          <div className=" cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
            Active
          </div>
          <div className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
            Completed
          </div>
        </div>
      </section>
    </div>
  );
};

export default Container;
