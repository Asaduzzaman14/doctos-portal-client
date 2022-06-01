import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmation from './DeleteConfirmation';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://fathomless-badlands-83387.herokuapp.com/doctor', {

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Thsi is manage doctors page {doctors?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>NAme</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {doctors?.map((doctor, index) => <DoctorRow
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            key={doctor._id}
                            setDeletingDoctor={setDeletingDoctor}
                        ></DoctorRow>)

                        }

                    </tbody>


                </table>
            </div>
            {deletingDoctor && <DeleteConfirmation
                setDeletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingdoctor={setDeletingDoctor}
            ></DeleteConfirmation>}
        </div>
    );
};

export default ManageDoctors;