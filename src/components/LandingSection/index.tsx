import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Button from '../common/Button';
import News from '../common/News';
import { news } from '../../data/news';

import styles from './index.module.css';
import landingImage from '../../assets/imgs/landing-image.png';

const LandingSection: React.FC = () => {
  return (
    <section className={styles.landingSection}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src={landingImage} alt="Landing" />

        {/* Text and Button Overlay */}
        <div className={styles.textOverlay}>
          <h1>World News</h1>
          <hr />
          <h2>Amazing places in America to visit.</h2>
          <p>
            For some reason — this country, this city, this neighborhood, this
            particular street — is the place you are living a majority of your
            life in.
          </p>
          <Button label="Learn More" />
        </div>
      </div>

      {/* Component Section (1/3) */}
      <div className={styles.moreNewsContainer}>
        <div className={styles.newsSection}>
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
              <News data={n} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
