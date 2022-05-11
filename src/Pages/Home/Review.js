import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-md bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div class=" flex gap-4 items-center mt-3">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h4>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Review;