import { LuMenu, LuSunMoon } from "react-icons/lu";
import { BsSearch, BsMoonStars } from "react-icons/bs";
import { useTheme } from "../../helpers/dark-mode";

const Navbar = () => {

  const { darkMode, handleDarkMode} = useTheme();

  return (
      <div className="col-span-4 p-2 flex items-center justify-between h-12">
        <div className="bg-white rounded-md flex items-center justify-center p-2 w-8 h-8 cursor-pointer text-2xl">
          <LuMenu />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-md w-[250px] h-10 px-4 border-2 hover:border-indigo-500">
            <BsSearch className="cursor-pointer"/>
            <input type="text" placeholder="Search..." className="bg-transparent p-2 h-8 w-40 outline-none"/>
          </div>
          <div className="flex items-center  px-4 bg-white rounded-md w-[200px] h-12">
            <div className="text-xl" onClick={handleDarkMode}>
              {
                darkMode   ? <LuSunMoon /> : <BsMoonStars />
              }
            </div>
            
          </div>
        </div>

      </div>
  )
}

export default Navbar;