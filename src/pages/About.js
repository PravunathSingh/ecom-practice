import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import AboutMission from '../components/about/AboutMission';
import AboutStats from '../components/about/AboutStats';
import Footer from '../components/ui/Footer';

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutStats />
      <AboutMission />
      <Footer />
    </div>
  );
};

export default About;
