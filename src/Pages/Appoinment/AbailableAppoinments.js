import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AbailableAppoinments = ({ date, setDate }) => {

    const [treetment, setTreetment] = useState(null)

    const formatedDate = format(date, "PP")

    const { isLoading, data: services, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`https://docotrs-portal-server.vercel.app/available?date=${formatedDate}`).then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className=''>
            <p className='text-secondary text-2xl text-center mt-6'>Abilable Appoinments on {format(date, "PP")}
            </p>

            <div className='px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    services?.map(service => <Service
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
                refetch={refetch}
            ></BookingModal>}



        </div>
    );
};

export default AbailableAppoinments;