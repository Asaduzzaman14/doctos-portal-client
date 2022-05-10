import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'



const Info = () => {



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCard cartTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cartTitle="Visit our location" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cartTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;