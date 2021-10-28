import React from 'react';

const ContactForm = () => {
  return (
    <div className='px-8 py-6 shadow-xl font-rubik bg-bg-brand-dark rounded-xl'>
      <form>
        <div>
          <div className='mb-2 md:mb-3'>
            <label className='mb-4 font-medium md:text-lg text-brand-primary'>
              Name
            </label>
          </div>
          <div className='mb-6 md:mb-10'>
            <input
              type='text'
              required
              className='w-full text-lg font-medium rounded-lg bg-bg-brand text-brand-primary'
            />
          </div>

          <div className='mb-2 md:mb-3'>
            <label className='mb-2 font-medium md:text-lg text-brand-primary'>
              Email
            </label>
          </div>
          <div className='mb-6 md:mb-10'>
            <input
              type='email'
              required
              className='w-full text-lg font-medium rounded-lg bg-bg-brand text-brand-primary'
            />
          </div>

          <div className='mb-2 md:mb-3'>
            <label className='mb-2 font-medium md:text-lg text-brand-primary'>
              Phone
            </label>
          </div>
          <div className='mb-6 md:mb-10'>
            <input
              type='text'
              required
              className='w-full text-lg font-medium rounded-lg bg-bg-brand text-brand-primary'
            />
          </div>
          <div className='mb-6 md:mb-10'>
            <h5 className='mb-2 font-medium md:text-lg text-brand-primary'>
              <label>Message</label>
            </h5>
            <textarea
              cols='20'
              rows='5'
              required
              className='w-full text-lg font-medium rounded-lg bg-bg-brand text-brand-primary'
            ></textarea>
          </div>
        </div>
        <button
          type='submit'
          className='w-full px-8 py-2 mb-4 text-base font-medium transition-all duration-300 border-2 md:mb-0 md:mr-8 md:text-lg hover:-translate-y-2 bg-brand-primary hover:bg-brand-primary-light border-brand-primary text-bg-brand rounded-xl focus:ring-2 ring-offset-2 ring-brand-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
