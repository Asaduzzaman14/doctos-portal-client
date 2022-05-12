import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);










    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-lg">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl">Login</h2>


                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent"
                    >Continew with Google</button>

                </div>

            </div>
        </div>
    );
};

export default Login;