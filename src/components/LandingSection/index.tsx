import React from 'react';
import styles from './index.module.css';
import landingImage from '../../assets/imgs/landing-image.png';
import NewsSection from '../NewsSection';

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
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>

      {/* Component Section (1/3) */}
      <div className={styles.moreNewsContainer}>
        <NewsSection />
      </div>
    </section>
  );
};

export default LandingSection;
