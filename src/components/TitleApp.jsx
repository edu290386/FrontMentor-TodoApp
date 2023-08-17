import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const TitleApp = () => {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <article className="w-[90%] flex items-center justify-between mb-6 sm:mb-10">
      <h1 className=" font-semibold text-3xl sm:text-5xl text-white tracking-[0.4em] ">
        TODO
      </h1>
      <div className="flex mb-2">
        <img onClick={toggleDarkMode} className="w-5 sm:w-7 hidden dark:block" src={Sun} alt="" />
        <img onClick={toggleDarkMode} className="w-5 sm:w-7 dark:hidden " src={Moon} alt="" />
      </div>
    </article>
  );
}

export default TitleApp