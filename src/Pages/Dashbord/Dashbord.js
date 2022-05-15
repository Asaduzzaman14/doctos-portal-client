import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
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
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;