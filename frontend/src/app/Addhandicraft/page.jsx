'use client';
import React from 'react';
import './addhandi.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';

const SignupSchema = Yup.object().shape({
    productname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    
    image: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    material: Yup.string().required('Required'),
    price: Yup.number().required('Required')
    

});

const Addhandicraft = () => {
    const productform = useFormik({
        initialValues: { productname: '', image: '', description: '', material: '',price:'' },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            // setTimeout(() => {

            //   resetForm();
            // },3000);
            const res = await fetch('http://localhost:5500/handicraft/add', {
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
                                <h1>Add details of handicraft</h1>
                                <form onSubmit={productform.handleSubmit}>
                                    <label htmlFor='productname'>productname: </label>
                                    <span className='text-danger ms-3 '>{productform.errors.productname}</span>
                                    <input type='text' className='form-control mb-4' id="productname" onChange={productform.handleChange} value={productform.values.productname} />

                                    <label htmlFor='image'>Image Link: </label>
                                    <span className='text-danger ms-3 '>{productform.errors.image}</span>
                                    <input type='text' className='form-control mb-4' id="image" onChange={productform.handleChange} value={productform.values.image} />

                                    <label htmlFor='description'>Description: </label>
                                    <span className='text-danger ms-3 '>{productform.errors.description}</span>
                                    <input type='text' className='form-control mb-4' id="description" onChange={productform.handleChange} value={productform.values.description} />

                                    <label htmlFor='material'>Material: </label>
                                    <span className='text-danger ms-3 '>{productform.errors.material}</span>
                                    <input type='text' className='form-control mb-4' id="material" onChange={productform.handleChange} value={productform.values.material} />
                                    
                                    <label htmlFor='price'>Price: </label>
                                    <span className='text-danger ms-3 '>{productform.errors.price}</span>
                                    <input type='number' className='form-control mb-4' id="price" onChange={productform.handleChange} value={productform.values.price} />
                                    
                                    

                                    <button className='btn btn-primary' type='submit' disabled={productform.isSubmitting}>{productform.isSubmitting ? 'submitting...' : 'submit'}</button>
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

export default Addhandicraft