import { Clock } from 'lucide-react';
import { News as NewsType } from '../../../types/news';

import styles from './index.module.css';

interface Props {
  data: NewsType;
}

const News: React.FC<Props> = ({
  data: { category, title, content, createdTimeAgo },
}) => {
  return (
    <div className={styles.newsItem}>
      <span className={styles.category}>{category}</span>
      <h3>{title}</h3>
      <p>{content}</p>
      <span className={styles.time}>
        <Clock size={16} /> {createdTimeAgo}
      </span>
    </div>
  );
};

export default News;
