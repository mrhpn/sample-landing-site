import React from 'react';
import styles from './index.module.css';

interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return <button className={styles.btnPrimary}>{label}</button>;
};

export default Button;
