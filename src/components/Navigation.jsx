import React from "react";

const Navigation = () => {
  return (
    <div className='flex justify-between items-center m-4'>
      <div>
        <p className='font-bold text-4xl'>coachB</p>
      </div>
      <div>
        <ul className='flex justify-end'>
          <li className='mr-4'>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
