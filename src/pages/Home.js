import React from 'react';
import HeroPartners from '../components/home/HeroPartners';
import HomeCategories from '../components/home/HomeCategories';
import HomeFeatured from '../components/home/HomeFeatured';
import HomeHero from '../components/home/HomeHero';
import HomeHighlights from '../components/home/HomeHighlights';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeCategories />
      <HomeHighlights />
      <HomeFeatured />
      <HeroPartners />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
