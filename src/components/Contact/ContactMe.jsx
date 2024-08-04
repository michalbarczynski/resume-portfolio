import React from "react";
import "./ContactMe.scss";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedin from "../../images/linkedin.png";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={gmail}
            text="michal.barczynski97@gmail.com"
          />
          <ContactInfoCard
            iconUrl={github}
            text="https://github.com/michalbarczynski"
          />
          <ContactInfoCard
            iconUrl={linkedin}
            text="https://www.linkedin.com/in/michal-barczynski-607861191/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
