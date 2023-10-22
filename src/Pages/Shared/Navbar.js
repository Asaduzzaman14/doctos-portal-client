import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate, useRoutes } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();
  console.log(location?.pathname);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItem = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='appoinment'>Appoinment</Link>
      </li>
      {/* <li><Link to='review'>Review</Link></li> */}
      <li>
        <Link to='contruct'>Contruct Us</Link>
      </li>
      <li>
        <Link to='about'>About</Link>
      </li>
      <div className='lg:flex gap-5'>
        {user && (
          <li>
            <Link to='dashbord'>Dashbord</Link>
          </li>
        )}
        <li className='font-semibold'>
          {user ? (
            <button
              onClick={logout}
              className='btn text-gray-300 font-semibold py-0 btn-small'
            >
              Sign out
            </button>
          ) : (
            <Link to='login'>Login</Link>
          )}
        </li>
      </div>
    </>
  );

  return (
    <>
      <div className='navbar flex justify-between px-5 shadow mb-2'>
        <div className=' flex justify-between '>
          {/* mobile dropdown  */}

          <div className='dropdown'>
            {!location?.pathname.includes("/dashbord") && (
              <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
            )}

            <ul
              tabIndex='0'
              className='mx-auto menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52 '
            >
              {menuItem}
            </ul>
          </div>

          <Link to={"/"} className='font-semibold normal-case text-xl'>
            Doctors Care
          </Link>
        </div>

        <div className='ml-auto hidden lg:flex'>
          <ul className='menu flex  font-semibold menu-horizontal p-0 '>
            {menuItem}
          </ul>
        </div>

        <div className=''>
          {location?.pathname.includes("/dashbord") && (
            <label
              tabIndex='1'
              htmlFor='dashboard-sidebar'
              className='btn btn-ghost lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
