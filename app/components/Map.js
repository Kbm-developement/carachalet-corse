import React from 'react'

const Map = () => {
  return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.3313502586857!2d9.500327625496263!3d42.305205844754774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d75cd7f768ae77%3A0x8413defa8ecd2f63!2sVivaggio%2C%2020230%20San-Giuliano!5e1!3m2!1sfr!2sfr!4v1747838885736!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='rounded-lg h-64 w-full'
        ></iframe>
      </div>
  )
}

export default Map