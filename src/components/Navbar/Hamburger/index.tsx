import React from 'react';
import styles from './index.module.css';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <div
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={toggle}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default Hamburger;
