import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AbailableAppoinments = ({ date, setDate }) => {

    const [services, setservices] = useState([])

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <div>
            <p className='text-primary text-2xl text-center mt-6'>Abilable Appoinments on {format(date, "PP")}
            </p>
            {

            }



        </div>
    );
};

export default AbailableAppoinments;