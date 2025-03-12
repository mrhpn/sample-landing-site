import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

const NotFoundComponent = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.message}>
        Oops! The page you are looking for doesn't exist.
      </p>
      <NavLink to="/" className={styles.homeLink}>
        Go Back to Home
      </NavLink>
    </div>
  );
};

export default NotFoundComponent;
