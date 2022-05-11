import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AbailableAppoinments = ({ date, setDate }) => {

    const [services, setservices] = useState([])
    const [treetment, setTreetment] = useState(null)


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <div>
            <p className='text-secondary text-2xl text-center mt-6'>Abilable Appoinments on {format(date, "PP")}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                        setTreetment={setTreetment}
                    ></Service>)
                }
            </div>

            {treetment && <BookingModal
                date={date}
                treetment={treetment}
                setTreetment={setTreetment}
            ></BookingModal>}



        </div>
    );
};

export default AbailableAppoinments;