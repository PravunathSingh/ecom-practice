import React from 'react';

const ContactMapAddress = () => {
  return (
    <div className='font-rubik'>
      <div className='grid gap-12 md:grid-cols-2'>
        <div className='grid p-4 border-2 rounded-lg shadow-lg place-content-center bg-bg-brand-dark border-bg-brand-dark'>
          <i className='mb-3 text-center text-brand-primary fas fa-map-marker-alt fa-2x md:mb-5'></i>
          <p className='text-center text-brand-primary-light'>
            3rd Floor, 37, 1, GN Block Sector V, Bidhannagar, Kolkata-700091
            East
          </p>
        </div>
        <div className='grid p-4 border-2 rounded-lg shadow-lg place-content-center bg-bg-brand-dark border-bg-brand-dark'>
          <i className='mb-3 text-center fa-2x text-brand-primary fa fa-phone md:mb-3'></i>
          <p className='mb-3 text-center text-brand-primary-light md:mb-5'>
            +919999998888
          </p>
          <i className='mb-3 text-center fa-2x text-brand-primary fas fa-envelope md:mb-3'></i>
          <p className=' text-brand-primary-light'>
            ADMIN@ACHIEVEXSOLUTIONS.COM
          </p>
        </div>

        <div className='bg-gray-500 md:col-span-2'>
          <div style={{ width: '100%' }}>
            <iframe
              title='map'
              width='100%'
              height='450'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
              src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3rd%20Floor,%2037,%201,%20GN%20Block,%20Sector%20V,%20Bidhannagar,%20Kolkata,%20West%20Bengal%20700091+(AchieveX%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            >
              <a href='http://www.gps.ie/'>truck gps</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMapAddress;
