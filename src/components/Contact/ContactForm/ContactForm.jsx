import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form action="https://formsubmit.co/michal.barczynski97@gmail.com" method="POST">
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="E-mail" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />
        <input name="_redirect" type="hidden" id="name" value="https://google.com"/><input name="_formsubmit_id" type="text" style={{ display: 'none' }}/>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
