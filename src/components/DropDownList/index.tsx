import { useState, useEffect, useRef } from 'react';

interface Props {
  options: string[];
  link: string;
  currentLocation: string;
  defaultText: string;
}

function DropdownList({ options, link, currentLocation, defaultText }: Props) {
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
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={`hover:fill-mainText fill-disabledText hover:text-mainText hover:bg-anti-flash-white relative rounded-md px-4 py-4 text-base transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-opacity-50 hover:text-opacity-70 lg:py-2 lg:text-sm xl:text-base ${
        link === currentLocation && 'bg-backGround text-mainText fill-mainText'
      }`}>
      <div className="flex items-center justify-center gap-4 lg:justify-start">
        <p>
          {defaultText} : <strong>{selectedOption || 'من داخل الجزائر'}</strong>
        </p>
        <div className={`transition-all duration-200 ${isOpen && 'rotate-180'}`}>
          <svg width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.36396 4.94972L11.3138 0L12.728 1.41421L6.36396 7.77822L0 1.41421L1.41422 0L6.36396 4.94972Z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className=" lg:bg-anti-flash-white flex w-full flex-col rounded-md lg:absolute lg:left-0 lg:top-12">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectOption(option)}
              className="mt-2 w-full rounded-md py-2 font-bold hover:bg-gray-200 lg:mt-0 lg:px-4">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownList;
