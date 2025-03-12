import React, { useState } from 'react';
import styles from './index.module.css';
import NavLink from './Navlink';
import Hamburger from './Hamburger';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.linksWrapper}>
        {/* Navigation Links - Desktop & Mobile */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <NavLink to="/" label="Home" />
          <NavLink to="/discovery" label="Discovery" />
          <NavLink to="/photos" label="Photos" />
          <NavLink to="/contact" label="Contact" />
        </ul>

        {/* Avatar */}
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
      </div>

      {/* Hamburger Menu - Mobile */}
      <Hamburger isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
    </nav>
  );
};

export default Navbar;
