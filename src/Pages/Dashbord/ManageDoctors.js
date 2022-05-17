import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {

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

            <div class="overflow-x-auto">
                <table class="table w-full">
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
                        ></DoctorRow>)

                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;