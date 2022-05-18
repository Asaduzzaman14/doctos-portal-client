import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppoinment = () => {
    const [user] = useAuthState(auth)

    // console.log(user);
    const [appoinment, setAppoinments] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-badlands-83387.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')} `
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()

                })
                .then(data => {

                    setAppoinments(data)
                })
        }

    }, [user])


    if (!appoinment) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-3xl'>This is my appoinment:{appoinment?.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>treetyment</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            appoinment?.map((ap, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{ap.patientName}</td>
                                <td>{ap.date}</td>
                                <td>{ap.sloat}</td>
                                <td>{ap.treetment}</td>
                                <td>{(ap.price && !ap.paid) && <Link to={`payment/${ap._id}`}><button className='btn btn-xs btn-success' >pay</button></Link>}
                                    {(ap.price && ap.paid) && <span className='btn btn-xs text-success' >paid</span>}

                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;

