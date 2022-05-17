import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctors = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', (req, res) => fetch('http://localhost:5000/service').then(res => res.json()).then())
    const imagestorageKey = '22256484ee99d529c0cbd5a2e6197de5'



    /**
 * 3wayes to store image
 * 1> third party storage   // free open public storage is ok for practis project
 * 2> your won storage
 * 3> Database: Mongodb
 * 
 * YUP to validate file : search YUP file validation for react from hook
 */


    const onSubmit = async data => {
        const image = data.image[0]
        const fromdata = new FormData()
        fromdata.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagestorageKey}`
        fetch(url, {
            method: "POST",
            body: fromdata
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }



                    // send my databse
                    console.log('doctor details', doctor);

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Doctor added Successfully')
                                // reset()
                            }
                            else {
                                toast.error('Faield to add doctor')
                            }
                        })


                }
                // console.log('imgbb', result.data)
            })

    };
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Add new Doctors</h2>
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
                        <span className="label-text">Speciality</span>

                    </label>
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">

                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>
                </div>

                {/* img add */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image File</span>
                    </label>

                    {/* photo input */}

                    <input
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            },
                        })}

                        type="file"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                    </label>

                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctors;