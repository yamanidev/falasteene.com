interface Props {
  text: string;
  link: string;
  currentLocation: string;
}

function NavBarItem({ text, link, currentLocation }: Props) {
  return (
    <a
      href={link}
      className={`hover:text-mainText hover:bg-anti-flash-white rounded-md px-2 py-4 text-base transition-all duration-500 hover:cursor-pointer hover:bg-opacity-50  hover:text-opacity-70 lg:py-2 lg:text-sm xl:px-4 xl:text-base  ${
        link == currentLocation && 'bg-ghost-white text-mainText'
      }`}>
      {text}
    </a>
  );
}

export default NavBarItem;
