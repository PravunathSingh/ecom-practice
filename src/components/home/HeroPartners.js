import React from 'react';
import canon from '../../assests/canon.png';
import heavy from '../../assests/heavy.png';
import nvdia from '../../assests/nvdia.png';
import puma from '../../assests/puma.png';
import zara from '../../assests/zara.png';
import rayBan from '../../assests/rayBan.png';

const HeroPartners = () => {
  return (
    <div className='container font-rubik'>
      <div className='max-w-4xl mx-auto mb-12 lg:mb-20'>
        <h4 className='mb-5 text-3xl font-semibold text-center text-brand-primary lg:text-4xl lg:mb-8'>
          Our Trusted Partners
        </h4>
        <p className='text-lg leading-relaxed text-center text-gray-700 lg:text-xl lg:leading-relaxed'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          dolorem mollitia asperiores debitis similique rerum.
        </p>
      </div>
      <div className='grid gap-20 md:grid-cols-2 lg:grid-cols-3'>
        <div className='mb-10 lg:mb-16'>
          <img src={canon} alt='' />
        </div>
        <div className='mb-10 lg:mb-16'>
          <img src={heavy} alt='' />
        </div>
        <div className='mb-10 lg:mb-16'>
          <img src={zara} alt='' />
        </div>
        <div className='mb-10 lg:mb-16'>
          <img src={rayBan} alt='' />
        </div>
        <div className='mb-10 lg:mb-16'>
          <img src={puma} alt='' />
        </div>
        <div className='mb-10 lg:mb-16'>
          <img src={nvdia} alt='' />
        </div>
      </div>
    </div>
  );
};

export default HeroPartners;
