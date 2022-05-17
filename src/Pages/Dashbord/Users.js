import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fathomless-badlands-83387.herokuapp.com/user', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All users {users?.length}</h2>

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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map(user => <UserRow
                                user={user}
                                key={user._id}
                                refetch={refetch}
                            ></UserRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;