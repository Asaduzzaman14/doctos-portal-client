import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppoinmentBanner = ({ date, setDate }) => {


    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You are Selected {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;