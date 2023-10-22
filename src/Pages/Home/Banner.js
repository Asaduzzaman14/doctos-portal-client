import React from "react";
import chair from "../../assets/images/chair.png";
import HomeButton from "../Shared/Button/HomeButton";

const Banner = () => {
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col gap-10 lg:flex-row-reverse'>
        <img
          src={chair}
          className='w-full max-w-lg rounded-lg shadow-2xl'
          alt='img'
        />
        <div>
          <h1 className='text-2xl lg:text-5xl font-bold text-gray-800'>
            Your New Smile Starts Here
          </h1>
          <p className='py-6 font-medium'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the
          </p>
          <HomeButton>Get Started</HomeButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
