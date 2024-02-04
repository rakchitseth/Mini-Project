'use client';
import React from 'react';
import './signup.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'too short!').required('Required')
        .matches(/[a-z]/, 'password must countain at least Lower case letter')
        .matches(/^[A-Z]/, 'password must countain at least Upper case letter')
        .matches(/[0-9]/, 'password must countain at least one numeric')
        .matches(/\W/, 'password must countain at special'),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'passwords must match'),

});

const Signup = () => {
    const signupform = useFormik({
        initialValues: { username: '', email: '', password: '', confirmpassword: '' },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            // setTimeout(() => {

            //   resetForm();
            // },3000);
            const res = await fetch('http://localhost:5500/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json' }
            });

            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar('Succesfully Registered', { variant: 'success' })
            }
            else {
                enqueueSnackbar("Error Occured", { variant: "error" })
            }

        },
        validationSchema: SignupSchema
    })
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 signup-full-bg'>
            <div className="container w-100">
                <div className="card">
                    <div className='row'>
                        <div className='col-md-4 mx-auto'>
                            <div className="card-body p-5">
                                <h1>Sign Up</h1>
                                <form onSubmit={signupform.handleSubmit}>
                                    <label htmlFor='username'>Username: </label>
                                    <span className='text-danger ms-3 '>{signupform.errors.username}</span>
                                    <input type='text' className='form-control mb-4' id="username" onChange={signupform.handleChange} value={signupform.values.username} />

                                    <label htmlFor='Email'>Email: </label>
                                    <span className='text-danger ms-3 '>{signupform.errors.email}</span>
                                    <input type='text' className='form-control mb-4' id="email" onChange={signupform.handleChange} value={signupform.values.email} />

                                    <label htmlFor='password'>Password: </label>
                                    <span className='text-danger ms-3 '>{signupform.errors.password}</span>
                                    <input type='text' className='form-control mb-4' id="password" onChange={signupform.handleChange} value={signupform.values.password} />

                                    <label htmlFor='password'>Confirm Password: </label>
                                    <span className='text-danger ms-3 '>{signupform.errors.confirmpassword}</span>
                                    <input type='password' className='form-control mb-4' id="confirmpassword" onChange={signupform.handleChange} value={signupform.values.confirmpassword} />

                                    <button className='btn btn-primary' type='submit' disabled={signupform.isSubmitting}>{signupform.isSubmitting ? 'submitting...' : 'submit'}</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-6 signup-bg m-0 p-0">
                            {/* <div className=' h-100'></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup