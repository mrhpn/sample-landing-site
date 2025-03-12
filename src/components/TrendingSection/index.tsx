import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trendings } from '../../data/trending';
import Card from '../common/Card';

import styles from './index.module.css';

const TrendingSection: React.FC = () => {
  return (
    <section className={styles.trendingSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Trending</h2>
        <div className={styles.navigationArrows}>
          <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
          <ChevronRight className={styles.arrow} />
        </div>
      </div>
      <div className={styles.trendingCardsWrapper}>
        {trendings?.map((trending) => (
          <Card
            key={trending.id}
            imageUrl={trending.imageUrl}
            title={trending.title}
            description={trending.description}
            createdTimeAgo={trending.createdTimeAgo}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
