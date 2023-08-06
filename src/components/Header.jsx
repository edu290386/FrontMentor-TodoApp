import Moon from '../assets/icon-moon.svg'
import Sun from '../assets/icon-sun.svg'

const Header = () => {
  return (
    <div>
        <article className='flex justify-between items-center bg-mountain-mobile-light bg-cover h-48 pb-24 px-5 '>
            <h1 className='font-semibold text-3xl text-white tracking-[0.4em] '>TODO</h1>
            <div className='flex items-center'>
                <img src={Sun} alt="" />
                <img src={Moon} alt="" />
            </div>
        </article>
        
    </div>
  )
}

export default Header