import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=' text-center my-4'>
      &copy; Boubacar FALL <span className='font-bold'> {year}</span>
    </div>
  );
};

export default Footer;
