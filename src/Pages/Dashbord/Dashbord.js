import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';


const Dashbord = () => {
    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user)

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                <h2 className='text-4xl text-cyan-600'>Welcome to Your  Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content font-serif ">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to=''>My Appoinment</Link></li>
                    <li><Link to='myreview'>My Review</Link></li>
                    <li><Link to='myhistory'>My History</Link></li>
                    {admin && <li><Link to='allusers'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;