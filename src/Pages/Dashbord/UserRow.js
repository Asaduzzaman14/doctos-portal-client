import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://fathomless-badlands-83387.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')} `
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make An admin')

                }
                return res.json()
            }
            )
            .then(data => {
                console.log(data)
                if (data.modifideCount > 0) {
                    refetch()
                    toast(`SuccessFulle made an admin`)
                }
            })
    }
    return (
        <tr>
            <th>{1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admine</button>}</td>
            <td><button className='btn btn-xs'>Delete</button></td>
            <td>{ }</td>
        </tr>
    )


};

export default UserRow;