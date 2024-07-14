import React from 'react';
import "./ContactMe.scss";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/icons8-gmail-logo-96.png"
            text="michal.barczynski97@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/icons8-github-96.png"
            text="https://github.com/michalbarczynski"
          />
          <ContactInfoCard
            iconUrl="./assets/images/icons8-linkedin-96.png"
            text="https://www.linkedin.com/in/michal-barczynski-607861191/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe;
