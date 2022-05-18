import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor



    return (

        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <label onClick={() => setDeletingDoctor(email)} for="delete-confirm-modal" class="btn  btn-xs btn-error text-white">Delete</label>

        </tr>

    );
};

export default DoctorRow;