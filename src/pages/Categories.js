import React from 'react';
import CategoriesSection from '../components/categories/CategoriesSection';
import Category from '../components/categories/Category';
import CategoryHeader from '../components/categories/CategoryHeader';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Categories = () => {
  return (
    <div>
      <Header />
      <CategoryHeader />
      <CategoriesSection />
      <Category />
      <Footer />
    </div>
  );
};

export default Categories;
