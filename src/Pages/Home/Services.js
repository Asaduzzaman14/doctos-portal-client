import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import HomeButton from '../Shared/Button/HomeButton';


const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]

    return (
        <div>
            <div className='my-32'>
                <div className=' text-center '>
                    <h4 className='text-primary text-xl font-medium '>OUR SERVICES</h4>
                    <h2 className='text-4xl mb-16'>Services We Provide</h2>
                </div>


                <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <ServicesCard
                            service={service}
                            key={service._id}
                        ></ServicesCard>)
                    }
                </div>
            </div>


            <div className=''>
                <div className="hero min-h-screen w-70% ">
                    <div className="hero-content flex-col lg:flex-row gap-10">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='max-w-md'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <HomeButton> Get Started</HomeButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;