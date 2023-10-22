import React from "react";
import appoinment from "../../assets/images/appointment.png";
import HomeButton from "../Shared/Button/HomeButton";

const ContuctUs = () => {
  return (
    <div
      style={{ background: `url(${appoinment})` }}
      className='text-center py-12 mt-36'
    >
      <h4 className='text-primary text-2xl'>Contuct us</h4>
      <h2 className='text-white text-3xl lg:text-4xl mb-3'>
        Stay connected with us
      </h2>
      <div>
        <input
          type='text'
          placeholder='Your Email'
          className='input input-bordered input-md w-full max-w-xs mb-4'
        />
        <br />
        <input
          type='text'
          placeholder='Subject'
          className='input input-bordered input-md w-full max-w-xs mb-4'
        />
        <br />
        <textarea
          className='textarea  w-full max-w-xs mb-6'
          placeholder='Your Message'
        ></textarea>
        <HomeButton>Submit</HomeButton>
      </div>
    </div>
  );
};

export default ContuctUs;
