import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0jtEEVAsh12VIULuhaZmUr4zuWO9XxEwEALUdN8roMVqN8bXzYcs5A6boD0huwce6HA7Kbwf1ncnYOVQVLlpXe00rDxE5Bhf');




const Payment = () => {
    const { id } = useParams()
    const url = `https://fathomless-badlands-83387.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')} `
        }

    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log('appointment details', appointment);

    return (
        <>
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Hello{appointment?.paitentName}</h2>
                            <p>Your Appointment<span className='text-orange-600'>{appointment?.date}</span> at {appointment?.sloat}</p>
                            <p>Please Pay for ${appointment?.price}</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Payment;