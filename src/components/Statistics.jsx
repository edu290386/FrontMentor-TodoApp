

const Statistics = () => {
  return (
    <div>
        <div className="max-w-lg my-4 text-lg font-lg w-full bg-white flex justify-center gap-x-4 py-3 rounded-lg ">
          <div className=" cursor-pointer text-bright-blue">All</div>
          <div className=" cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
            Active
          </div>
          <div className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue-lt">
            Completed
          </div> 
        </div>
        <div className=" text-center pt-6 text-dark-grayish-blue">Drag and drop to reorder list</div>
    </div>
  )
}

export default Statistics