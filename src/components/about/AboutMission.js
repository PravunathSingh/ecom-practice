import React from 'react';
import aboutMission from '../../assests/aboutMission.jpg';

const AboutMission = () => {
  return (
    <div className='container mb-16 font-rubik md:mb-24 lg:mb-32'>
      <div className='grid gap-12 lg:grid-cols-2 place-items-center'>
        <div>
          <img src={aboutMission} alt='' className='rounded-xl' />
        </div>

        <div>
          <h2 className='mb-6 text-3xl font-semibold text-center md:mb-8 lg:mb-12 md:text-4xl lg:text-left text-brand-primary'>
            Our Mission
          </h2>
          <p className='mb-6 leading-relaxed text-center text-gray-600 md:mb-8 lg:leading-relaxed lg:text-left lg:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            laborum neque voluptatem quas ipsa expedita tenetur fugiat
            explicabo, eum quod!
          </p>
          <p className='leading-relaxed text-center text-gray-600 lg:leading-relaxed lg:text-left lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            sapiente dolorum in minima nobis id possimus recusandae earum
            dolores provident.
          </p>
          <p className='hidden leading-relaxed text-center text-gray-600 lg:block lg:leading-relaxed lg:text-left lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            sapiente dolorum in minima nobis id possimus recusandae earum
            dolores provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
