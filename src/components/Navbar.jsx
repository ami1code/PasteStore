
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center p-4 bg-blue-950 gap-x-10">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-2xl hover:text-blue-200 cursor-pointer"
              : "text-white font-bold text-2xl hover:text-blue-200 cursor-pointer"
          } 
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
