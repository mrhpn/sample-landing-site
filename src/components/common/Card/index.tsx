import React from 'react';
import styles from './index.module.css';
import { Clock } from 'lucide-react';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  createdTimeAgo: string;
}

const Card: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  createdTimeAgo,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.subDescription}>
          <Clock size={16} /> {createdTimeAgo}
        </span>
      </div>
    </div>
  );
};

export default Card;
