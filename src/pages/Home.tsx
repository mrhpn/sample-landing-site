import React from 'react';
import LandingSection from '../components/LandingSection';
import TrendingSection from '../components/TrendingSection';
import HappeningNowSection from '../components/HappeningNow';

const Home: React.FC = () => {
  return (
    <div>
      <LandingSection />
      <TrendingSection />
      <HappeningNowSection />
    </div>
  );
};

export default Home;
