import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';



const Signup = () => {


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }


    let signInError
    if (error || googleError) {

        signInError = <small className='text-red-500'>{error?.message || googleError?.message}</small>
    }


    if (user || googleUser) {
        console.log(user, googleUser);

    }

    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-lg">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl">Sign Up</h2>


                    {/*  form  */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">


                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>

                                {/* name input */}

                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'name is required'
                                        },

                                        pattern: {
                                            value: 6,
                                            message: "Please provide a your Name"
                                        }
                                    })}

                                    type="name"
                                    placeholder="Name"
                                    class="input input-bordered w-full max-w-xs"
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                                </label>

                            </div>


                            {/*  */}
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>

                            {/* email input */}

                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },

                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please provide a valid Email"
                                    }
                                })}

                                type="email"
                                placeholder="Email"
                                class="input input-bordered w-full max-w-xs"
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>

                        </div>

                        {/* pasword  input*/}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>

                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 characters or longer"
                                    }
                                })}

                                type="password"
                                placeholder="password"
                                class="input input-bordered w-full max-w-xs"
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <apan className='label-text-alt text-red-500'>{errors.password.message}</apan>}
                                {errors.password?.type === 'minLength' && <apan className='label-text-alt text-red-500'>{errors.password.message}</apan>}
                            </label>

                        </div>



                        {signInError}
                        <input type="submit" value={'SIGNUP'} className='btn w-full text-white' />
                        <p><small>ALREADY HAVE AN ACCOUNT ? <Link to='/login' className='text-primary'>LOGIN</Link></small></p>
                    </form>




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

export default Signup;