import React from 'react';
import styles from './index.module.css';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { news } from '../../data/news';

const NewsSection: React.FC = () => {
  return (
    <div className={styles.newsSection}>
      {/* Title */}
      <div className={styles.title}>
        <h2>MORE NEWS</h2>
        <div className={styles.navigationArrows}>
          <ChevronLeft className={styles.arrow} />
          <ChevronRight className={styles.arrow} />
        </div>
      </div>
      <hr />

      {/* News items */}
      <div className={styles.newsItemWrapper}>
        {news?.map((n) => (
          <div className={styles.newsItem}>
            <span className={styles.category}>{n.category}</span>
            <h3>{n.title}</h3>
            <p>{n.content}</p>
            <span className={styles.time}>
              <Clock size={16} /> {n.createdTimeAgo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
