const Statistics = (props) => {
  const { displayTask } = props;

  const showTask = (value) => {
    displayTask(value);
  };

  return (
    <div className="w-[90%]">
      <div className="my-4 text-lg font-lg w-full bg-white flex justify-center gap-x-4 py-2 rounded-lg sm:hidden">
        <div
          onClick={() => showTask(1)}
          className=" cursor-pointer text-bright-blue"
        >
          All
        </div>
        <div
          onClick={() => showTask(2)}
          className=" cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt"
        >
          Active
        </div>
        <div
          onClick={() => showTask(3)}
          className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt"
        >
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
