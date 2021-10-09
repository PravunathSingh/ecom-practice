import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ui/ProductCard';

const Category = ({ category }) => {
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    const categoryFetch = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}?limit=3`
      );
      setcategoryData(response.data);
      console.log(categoryData);
    };
    categoryFetch();
  }, []);

  const categoriesList = categoryData.map((category) => {
    return (
      <div>
        <ProductCard
          key={category.id}
          title={category.title}
          img={category.image}
          price={category.price}
          description={category.description}
          rate={category.rating.rate}
          id={category.id}
        />
      </div>
    );
  });

  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {categoriesList}
    </div>
  );
};
export default Category;
