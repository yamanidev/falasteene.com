import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  link: String;
  currentLocation: string;
}

const DropdownList: React.FC<DropdownProps> = ({
  options,
  link,
  currentLocation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative hover:text-mainText hover:cursor-pointer rounded-md px-4 py-2  transition-all duration-500 hover:bg-backGround hover:bg-opacity-50 hover:text-opacity-70  ${
        link == currentLocation && "bg-backGround text-mainText"
      }`}
    >
      <div className="flex gap-4 items-center" onClick={toggleDropdown}>
        <p>
          تبرع الآن :<strong>{selectedOption || "من داخل الجزائر"}</strong>
        </p>
        <img
          className={`transition-all duration-500 ${isOpen && "rotate-180"}`}
          src={"../../assets/navbar/DropArrow.svg"}
          alt=""
        />
      </div>
      {isOpen && (
        <ul className="absolute top-12 bg-backGround w-full left-0 rounded-md flex flex-col ">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectOption(option)}
              className="font-bold px-4 rounded-md py-2 w-full  hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
