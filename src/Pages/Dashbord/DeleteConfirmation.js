import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmation = ({ setDeletingDoctor, refetch, setDeletingdoctor }) => {
    const { name, email } = setDeletingDoctor

    const handeldelete = () => {
        fetch(`https://fathomless-badlands-83387.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} successfully deleted `)
                    setDeletingdoctor(null)
                    refetch()
                }
            })
    }


    return (
        <>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you Sure You want To Delete ${name} </h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <td><button onClick={() => handeldelete} className='btn btn-error x-xm'> Delete</button></td>

                        <label htmlFor="delete-confirm-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmation;