import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';



const Testmonuals = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: '',
            review: '',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people3
        }
    ]


    return (
        <section className='mt-32'>
            <div className=' flex justify-between'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-5' >
                {
                    reviews.map(review => <Review
                        review={review}
                        key={review._id}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testmonuals;