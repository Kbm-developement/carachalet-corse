import React from 'react'

const Map = () => {
  return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1784.8163729363794!2d9.501603346256273!3d42.29988956795029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m3!3m2!1d42.2998598!2d9.5021183!4m0!5e1!3m2!1sfr!2sfr!4v1747921170728!5m2!1sfr!2sfr"
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