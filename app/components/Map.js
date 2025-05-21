import React from 'react'

const Map = () => {
  return (
    <div className='h-64'>
        <iframe
            src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2950.5668661716586!2d9.493912300166773!3d42.30910668254529!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1747825237910!5m2!1sfr!2sfr'
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default Map