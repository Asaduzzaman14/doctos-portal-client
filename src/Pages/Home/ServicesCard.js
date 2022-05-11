import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div class="card w-100 bg-base-100 shadow-xl ">

            <figure class="px-10 pt-10">
                <img src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>

            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
        </div>
    );
};

export default ServicesCard;