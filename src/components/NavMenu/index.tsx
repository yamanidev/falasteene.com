import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";

const NavMenu = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`relative transition-all duration-500 bg-mainGreen h-[72px] w-[72px] flex items-center justify-center ${
          isOpen && "bg-transparent"
        }`}
      >
        <Hamburger
          size={25}
          color={`${!isOpen ? "#ffff" : "#000000"}`}
          toggled={isOpen}
          toggle={setOpen}
        />
        {isOpen && (
          <div className="fixed top-[72px] bg-white drop-shadow-sm w-full md:w-[30rem] right-0 rounded-sm flex flex-col ">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default NavMenu;
