import React from 'react';
import "./ContactMe.scss";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';

const ContactMe = () => {
    
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl="./assets/images/.png"
                    text="michal.barczynski97@gmail.com"
                />
                <ContactInfoCard
                    iconUrl="./assets/images/.png"
                    text="https://github.com/michalbarczynski"
                />
                <ContactInfoCard
                    iconUrl="./assets/images/.png"
                    text="https://www.linkedin.com/in/michal-barczynski-607861191/"
                />
            </div>
            <div style={{flex: 1}}></div>
        </div>
    </section>
  )
}

export default ContactMe