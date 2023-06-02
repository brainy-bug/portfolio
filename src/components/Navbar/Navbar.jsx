import { NavLink } from "react-router-dom";

import { useAppContext } from "../../contexts/AppContext";

import { navLinks } from "../../utils/links";

const Navbar = () => {
  const { isPageActive } = useAppContext();
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {navLinks.map(({ id, text, url }) => {
          return (
            <li className='navbar-item' key={id}>
              <NavLink
                to={url}
                className={`${
                  isPageActive ? "navbar-link active" : "navbar-link"
                }`}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
