import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import HomeButton from '../Shared/Button/HomeButton';

const HomeAppoinment = () => {
    return (
        <section className='my-32'>
            <div style={{
                background: `url(${appointment})`
            }}
                className='flex justify-center items-center'>
                <div className='flex-1 hidden lg:block'>
                    <img className=' mt-[-100px]' src={doctor} alt="" />

                </div>
                <div className='flex-1 text-white p-5'>
                    <h3 className='text-2xl text-primary'>Appoinment</h3>
                    <h2 className='text-4xl py-5'>Make an appointment Today</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <HomeButton>Get Started</HomeButton>
                </div>
            </div>
        </section>
    );
};


export default HomeAppoinment;