import React from 'react'
import './ContactForm.scss'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div>
                <input type='text' name='firstname' placeholder='First Name'></input>
                <input type='text' name='lastname' placeholder='Last Name'></input>
            </div>
            <input type='text' name='e-mail' placeholder='E-mail'/>
            <textarea type='text' name='message' placeholder='Message' rows={3}/>
            <button>SEND</button>
        </form>
    </div>
    );  
};

export default ContactForm;