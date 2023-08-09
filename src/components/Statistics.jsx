const Statistics = () => {
  return (
    <div className="w-[90%]">
      <div className="my-4 text-lg font-lg w-full bg-white flex justify-center gap-x-4 py-2 rounded-lg sm:hidden">
        <div className=" cursor-pointer text-bright-blue">All</div>
        <div className=" cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
          Active
        </div>
        <div className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
          Completed
        </div>
      </div>
      <div className=" text-center py-12 text-dark-grayish-blue ">
        Drag and drop to reorder list
      </div>
    </div>
  );
};

export default Statistics;
