import React from 'react';



const InfoCard = ({ img, cartTitle, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl p-2 ${bgClass}`}>

            < figure className='pl-5'>
                <img src={img} alt="Album" />
            </ figure>

            <div class="card-body text-white">
                <h2 class="card-title">{cartTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div >
    );
};

export default InfoCard;