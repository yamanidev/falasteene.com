import './style.css';

interface Props {
  toggled: boolean; 
  toggle: () => void;
}

function HamburgerMenu({ toggle, toggled }: Props) { 
  return (
    <div onClick={toggle} className="relative">
      <div  className="menu__btn" >
        <span className={toggled ? 'open' : ''}></span>
      </div>
    </div>
  );
}

export default HamburgerMenu;
