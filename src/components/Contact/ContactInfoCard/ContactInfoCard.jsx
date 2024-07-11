import React from 'react';
import "./ContactInfoCard.scss"

const ContactInfoCard = ({iconUrl, text})=> {
  return (
    <div className=''>
        <div className=''>
            <img src={iconUrl} alt={text}/>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard