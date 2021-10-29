import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactHeader from '../components/contact/ContactHeader';
import ContactMapAddress from '../components/contact/ContactMapAddress';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='container my-16 md:my-24'>
        <ContactHeader />
        <div className='grid gap-12 lg:grid-cols-3'>
          <ContactForm />
          <div className='h-full lg:col-span-2'>
            <ContactMapAddress />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
