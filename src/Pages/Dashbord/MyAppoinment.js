import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const [user] = useAuthState(auth)

    console.log(user);
    const [appoinment, setAppoinments] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppoinments(data))
        }

    }, [user])

    return (
        <div>
            <h2 className='text-3xl'>This is my appoinment:{appoinment.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>treetyment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appoinment.map((ap, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{ap.patientName}</td>
                                <td>{ap.date}</td>
                                <td>{ap.sloat}</td>
                                <td>{ap.treetment}</td>
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