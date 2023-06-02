import React from "react";

const Map = () => {
  return (
    <section className='mapbox'>
      <figure>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433.606248286385!2d3.2439560605150612!3d6.445324696292262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b889b055dd011%3A0x61d4e55d9e59232!2sAmuwo%20Odofin%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680091603655!5m2!1sen!2sng'
          width='400'
          height='300'
          loading='lazy'
        ></iframe>
      </figure>
    </section>
  );
};
export default Map;
