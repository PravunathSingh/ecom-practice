import React from 'react';
import HomeCategories from '../components/home/HomeCategories';
import HomeHero from '../components/home/HomeHero';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeCategories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
