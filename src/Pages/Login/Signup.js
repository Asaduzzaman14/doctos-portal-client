import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [sendEmailVerification, sending, verifaicationError] = useSendEmailVerification(
        auth
    );



    if (user) {
        console.dir(user);
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }


    let signInError
    if (error || googleError || updateError) {

        signInError = <small className='text-red-500'>{error?.message || googleError?.message}</small>
    }


    if (user || googleUser) {
        console.dir(user, googleUser);

    }

    const onSubmit = async data => {
        console.dir(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await sendEmailVerification()
        await updateProfile({ displayName: data.name })
        navigate('/')
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-lg">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl">Sign Up</h2>


                    {/*  form  */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
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
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                                </label>

                            </div>


                            {/*  */}
                            <label className="label">
                                <span className="label-text">Your Email</span>
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
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>

                        </div>

                        {/* pasword  input*/}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

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
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
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