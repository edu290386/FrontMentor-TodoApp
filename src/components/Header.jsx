import imageDesktop from "../assets/bg-desktop-light.jpg";
import imageMobile from "../assets/bg-mobile-light.jpg";
const Header = () => {
  return (
    <div className=" ">
      <picture>
        <source media="(min-width: 640px)" srcSet={imageDesktop} />
        <img className="w-full" src={imageMobile} alt="" />
      </picture>
    </div>
  );
};

export default Header;
