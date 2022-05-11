import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treetment, date, setTreetment }) => {
    const { _id, name, slots } = treetment


    const handelFormSubmit = (event) => {
        event.preventDefault()
        const sloat = event.target.sloat.value;
        console.log(sloat, name, _id);
        setTreetment(null)
    }


    return (<div>


        <input type="checkbox" id="booking-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <h3 class="font-bold text-2xl text-secondary">{name}</h3>

                <form onSubmit={handelFormSubmit} className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
                    <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" disabled value={slots[0]} class="input input-bordered input-secondary w-full max-w-xs" />
                    <select name='sloat' class="select select-bordered w-full max-w-xs">

                        {
                            slots.map(sloat => <option value={sloat}>{sloat}</option>)
                        }
                    </select>

                    <input type="text" name='name' placeholder="Your name" class="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Your email" class="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="Phone" class="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="submit" value={'Submit'} class="bg-secondary btn text-white input input-bordered input-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default BookingModal;

