import React from 'react';

const Service = ({ service, setTreetment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='text-red-500'>
                    {
                        !slots.length ? "Try another date" : ''
                    }
                </p>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span>{ }</span>}</p>

                <p>{slots.length} {!slots.length ? 'SPACE' : 'SPACES'} AVALILABLE</p>

                <div className="card-actions justify-center">


                    <label onClick={() => setTreetment(service)} htmlhtmlFor="booking-modal" className="btn btn-secondary text-white  modal-button">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;