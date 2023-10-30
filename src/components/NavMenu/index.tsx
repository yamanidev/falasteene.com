import HumbergerMenu from '../HumbergerMenu';
import { type ReactNode,useState } from 'react';

interface Props {
  children: ReactNode;
}
function NavMenu({ children }: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`relative flex h-[72px] w-[72px] items-center justify-center bg-palestine-green transition-all duration-500 ${
          isOpen && 'bg-transparent'
        }`}>
        <HumbergerMenu toggled={isOpen} toggle={toggleOpen} />
        {isOpen && (
          <div className="fixed right-0 top-[72px] flex w-full flex-col rounded-sm bg-white drop-shadow-sm md:w-[30rem] ">
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export default NavMenu;
