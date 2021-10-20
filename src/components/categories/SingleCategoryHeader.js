import React, { useState } from 'react';

const SingleCategoryHeader = ({ categoryName }) => {
  const [content, setContent] = useState('');
  if (categoryName === 'electronics') {
    setContent('Best Deals On Electronics');
  } else if (categoryName === 'jewelery') {
    setContent('Best Deals On Jewelery');
  } else if (categoryName === `men's clothing`) {
    setContent(`Men's Autumn-Winter Collection`);
  } else {
    setContent('Beautiful Collection For Women');
  }

  return (
    <div className='container my-20 md:my-32'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center md:text-4xl lg:text-5xl'>
          {content}
        </h1>
        <p className='text-lg text-center text-gray-600 md:text-xl lg:text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempore
          perspiciatis incidunt rem earum dignissimos.
        </p>
      </div>
    </div>
  );
};

export default SingleCategoryHeader;
