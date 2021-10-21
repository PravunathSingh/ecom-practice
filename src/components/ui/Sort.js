import React from 'react';

const Sort = () => {
  return (
    <div>
      <form>
        <select
          name='sort'
          className='font-medium rounded-lg bg-bg-brand md:text-lg text-brand-primary focus:ring-2 focus:ring-brand-primary focus:ring-offset-2'
        >
          <option value='sort'>Sort</option>
          <option value='price from highest to lowest'>
            Price: From Highest to Lowest
          </option>
          <option value='price from lowest to highest'>
            Price: From Lowest to Highest
          </option>
          <option value='rating from highest to lowest'>
            Rating: From Highest to Lowest
          </option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
