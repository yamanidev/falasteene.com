import './style.css';

interface Props {
  toggled: boolean; // Corrected the typo in "toggled"
  toggle: () => void;
}

function HamburgerMenu({ toggle, toggled }: Props) { // Corrected the component name and added "toggled" prop
  return (
    <div onClick={toggle} className="relative">
      <div className="menu__btn" htmlFor="menu__toggle">
        <span className={toggled ? 'open' : ''}></span>
      </div>
    </div>
  );
}

export default HamburgerMenu;
