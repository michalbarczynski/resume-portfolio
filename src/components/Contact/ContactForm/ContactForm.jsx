import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form
        action="https://formsubmit.co/michal.barczynski97@gmail.com"
        method="POST"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="E-mail" />
        <textarea name="message" placeholder="Message" rows={3} />
        {/* <input type="hidden" name="_next" value="https://google.com"/> */}
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};  

export default ContactForm;
