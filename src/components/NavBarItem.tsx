import React from "react";

interface NavBarItemProps {
  text: string;
  link: string;
  currentLocation: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  text,
  link,
  currentLocation,
}) => {
  return (
    <a
      href={link}
      className={`hover:text-mainText hover:cursor-pointer rounded-md px-4 py-2  transition-all duration-500 hover:bg-backGround hover:bg-opacity-50 hover:text-opacity-70  ${
        link == currentLocation && "bg-backGround text-mainText"
      }`}
    >
      {text}
    </a>
  );
};

export default NavBarItem;
