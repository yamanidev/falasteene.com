import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  options: string[];
  link: string;
  currentLocation: string;
  defaultText: string;
}

const DropdownList: React.FC<DropdownProps> = ({
  options,
  link,
  currentLocation,
  defaultText,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<any>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={`relative hover:fill-mainText text-base lg:text-sm xl:text-base fill-disabledText hover:text-mainText hover:cursor-pointer rounded-md px-4 py-4 lg:py-2 transition-all duration-200 ease-in-out hover:bg-backGround hover:bg-opacity-50 hover:text-opacity-70 ${
        link === currentLocation && "bg-backGround text-mainText fill-mainText"
      }`}
    >
      <div className="flex gap-4 items-center justify-center lg:justify-start">
        <p>
          {defaultText} : <strong>{selectedOption || "من داخل الجزائر"}</strong>
        </p>
        <div
          className={`transition-all duration-200 ${isOpen && "rotate-180"}`}
        >
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.36396 4.94972L11.3138 0L12.728 1.41421L6.36396 7.77822L0 1.41421L1.41422 0L6.36396 4.94972Z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className=" lg:absolute lg:top-12 lg:bg-backGround w-full lg:left-0 rounded-md flex flex-col">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectOption(option)}
              className="font-bold mt-2 lg:mt-0 lg:px-4 rounded-md py-2 w-full hover:bg-gray-200"
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
