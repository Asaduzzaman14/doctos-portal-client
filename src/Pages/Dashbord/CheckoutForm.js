import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = (props) => {
    // console.log('this is boking price', appointment?.price);

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [Processing, setProcessing] = useState(false)
    const [transaction, setTransaction] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { _id, price, paitent, patientName } = props?.appointment

    useEffect(() => {
        fetch('https://fathomless-badlands-83387.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": " application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })


    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: paitent,
                },
            },
        })

        if (intentError) {
            setCardError(intentError.message)
            setProcessing(false)
        } else {
            setCardError('')
            setTransaction(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('your payment is completed')

            // store payment on database
            const payment = {
                appoinment: _id,
                transaction: paymentIntent.id
            }
            console.log('This is payment', payment);
            fetch(`https://fathomless-badlands-83387.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log('patch complete', data);
                })

        }
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'><p>
                    {success}
                </p>
                    <p>your transaction id: <span className='text-orange-500 font-bold'>{transaction}</span></p>


                </div>
            }
        </>
    );
};

export default CheckoutForm;