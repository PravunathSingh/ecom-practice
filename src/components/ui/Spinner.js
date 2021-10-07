import React from 'react';
import spinner from '../../assests/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '300px', margin: '50px auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
