import React from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

import image1 from '../../assets/imgs/happening-now-1.png';
import image2 from '../../assets/imgs/happening-now-2.png';
import image3 from '../../assets/imgs/happening-now-3.png';
import image4 from '../../assets/imgs/happening-now-4.png';
import image5 from '../../assets/imgs/happening-now-5.png';
import styles from './index.module.css';

const HappeningNowSection: React.FC = () => {
  return (
    <section className={styles.happeningNowSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Happening Now</h2>
        <div className={styles.navigationArrows}>
          <ChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} />
          <ChevronRight className={styles.arrow} />
        </div>
      </div>

      <div className={styles.imageGrid}>
        {/* First column (2/3 width) */}
        <div className={styles.column1}>
          <div className={styles.imageContainer}>
            <img src={image1} alt="Happening 1" />
            <div className={styles.textOverlay}>
              <h3>City</h3>
              <div className={styles.description}>
                <h4>Large article title</h4>
                <p>
                  Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                  detracto, vidit vituperatoribus duo id. Affert detraxit
                  voluptatum vis eu, inermis eloquentiam.
                </p>
                <div className={styles.detailsInfo}>
                  <Clock size={14} /> 2m ago
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src={image2} alt="Happening 2" />
            <div className={styles.textOverlay}>
              <h3>Travel</h3>
              <div className={styles.description}>
                <h4>Large article title</h4>
                <p>
                  Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                  detracto, vidit vituperatoribus duo id. Affert detraxit
                  voluptatum vis eu, inermis eloquentiam.
                </p>
                <div className={styles.detailsInfo}>
                  <Clock size={14} /> 2m ago
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second column (1/3 width) */}
        <div className={styles.column2}>
          <div className={styles.imgCard}>
            <img src={image3} alt="Happening 3" />
            <h3>Small Title</h3>
            <div className={styles.detailsInfo}>
              <Clock size={14} /> 3h ago by <u>Worldnews</u>
            </div>
          </div>
          <div className={styles.imgCard}>
            <img src={image4} alt="Happening 4" />
            <h3>Small Title</h3>
            <div className={styles.detailsInfo}>
              <Clock size={14} /> 4h ago by <u>Days</u>
            </div>
          </div>
          <div className={styles.imgCard}>
            <img src={image5} alt="Happening 5" />
            <h3>Small Title</h3>
            <div className={styles.detailsInfo}>
              <Clock size={14} /> 3h ago by <u>Monica</u>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningNowSection;
