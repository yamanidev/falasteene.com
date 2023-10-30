import { useState, useEffect, useRef } from 'react';

function LangugeDropDown() {
  const options = ['arabic', 'english', 'french'];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<any>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
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
      className={`fill-mainText text-mainText  bg-anti-flash-white relative rounded-md px-4 py-2 transition-all duration-200 ease-in-out hover:cursor-pointer    
      `}>
      <div className="flex items-center gap-4">
        <img src="/assets/navbar/traduction.svg" alt="traduction" />
        <p>
          <strong>{selectedOption || 'العربية'}</strong>
        </p>
        <div className={`transition-all duration-200 ${isOpen && 'rotate-180'}`}>
          <svg width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.36396 4.94972L11.3138 0L12.728 1.41421L6.36396 7.77822L0 1.41421L1.41422 0L6.36396 4.94972Z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className="bg-anti-flash-white absolute left-0 top-12 flex w-full flex-col rounded-md ">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectOption(option)}
              className="flex w-full justify-center rounded-md px-4 py-2 font-bold  hover:bg-gray-200">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LangugeDropDown;
