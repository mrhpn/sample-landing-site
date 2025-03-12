import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './index.module.css';

interface Props {
  to: string;
  label: string;
}

const Navlink: React.FC<Props> = ({ to, label }) => {
  return (
    <li className={styles.navItem}>
      <RouterNavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : '')}
        end
      >
        {label}
      </RouterNavLink>
    </li>
  );
};

export default Navlink;
