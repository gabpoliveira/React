// 2 - Links com react router
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">Sobre</NavLink>
    </nav>
  )
};

export default Navbar;