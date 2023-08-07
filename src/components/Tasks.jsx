import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import Container from "./Container";


const Tasks = () => {
  return (
    <div className="max-w-lg w-[90%] absolute top-10 sm:top-16 flex flex-col items-center justify-center sm:text-xl">
      <article className="w-full flex items-center justify-between mb-6 sm:mb-10">
        <h1 className=" font-semibold text-3xl sm:text-5xl text-white tracking-[0.4em] ">
          TODO
        </h1>
        <div className="flex mb-2">
          <img className="w-5 sm:w-7" src={Sun} alt="" />
          <img className="w-5 sm:w-7" src={Moon} alt="" />
        </div>
      </article>
      <input
        type="text"
        className="bg-white w-full mb-1 sm:mb-4 py-2 sm:py-4 pl-3 rounded "
        placeholder="Create a new todo..."
      />
      <Container />
     
    </div>
  );
};

export default Tasks;
