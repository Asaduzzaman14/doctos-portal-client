import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AbailableAppoinments from './AbailableAppoinments';
import AppoinmentBanner from './AppoinmentBanner';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>

            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AbailableAppoinments date={date} setDate={setDate}></AbailableAppoinments>
            <Footer></Footer>

        </div>
    );
};

export default Appoinment;