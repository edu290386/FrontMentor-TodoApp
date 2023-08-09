import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const TitleApp = () => {
  return (
    <article className="w-[90%] flex items-center justify-between mb-6 sm:mb-10">
      <h1 className=" font-semibold text-3xl sm:text-5xl text-white tracking-[0.4em] ">
        TODO
      </h1>
      <div className="flex mb-2">
        <img className="w-5 sm:w-7" src={Sun} alt="" />
        <img className="w-5 sm:w-7" src={Moon} alt="" />
      </div>
    </article>
  );
}

export default TitleApp