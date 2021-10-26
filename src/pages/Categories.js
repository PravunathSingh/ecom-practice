import React from 'react';
import CategoriesSection from '../components/categories/CategoriesSection';
import Category from '../components/categories/Category';
import CategoryHeader from '../components/categories/CategoryHeader';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const Categories = () => {
  return (
    <div>
      <Navbar />
      <CategoryHeader />
      <CategoriesSection />
      <Category />
      <Footer />
    </div>
  );
};

export default Categories;
