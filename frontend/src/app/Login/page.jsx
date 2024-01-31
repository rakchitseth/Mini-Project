'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';



const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4,'too short!').required('Required')
  .matches(/[a-z]/,'password must countain at least Lower case letter')
  .matches(/^[A-Z]/,'password must countain at least Upper case letter')
  .matches(/[0-9]/,'password must countain at least one numeric')
  .matches(/\W/,'password must countain at special'),
  confirmpassword: Yup.string().oneOf([Yup.ref('password'),null],'passwords must match'),
  
});

const Login = () => {
  const loginform = useFormik({
    initialValues: { username: '', email: '', password: '' , confirmpassword: ''},
    onSubmit: async(values,{resetForm})=>{
      console.log(values);
      // setTimeout(() => {
        
      //   resetForm();
      // },3000);
      const res = await fetch('http://localhost:5000/user/add',{
       method: 'POST',
       body: JSON.stringify(values),
       headers:{ 'Content-type' : 'application/json'}
    });

    console.log(res.status);
    if(res.status === 200)
    {
      enqueueSnackbar('Succesfully Registered',{variant:'success'})
    }
    else{
      enqueueSnackbar("Error Occured",{ variant:"error" })
    }

     },
    validationSchema:LoginSchema
  })
  return (
  <div className='d-flex justify-content-center align-items-center'>
      <div className='parent '>
        <div className='child '>
          <h1>Login</h1>
          <form onSubmit={loginform.handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <span className='text-danger ms-3 '>{loginform.errors.username}</span>
            <input type='text'  className='form-control mb-4' id="username" onChange={loginform.handleChange} value={loginform.values.username}/>
            
            {/* <label htmlFor='Email'>Email: </label>
            <span className='text-danger ms-3 '>{loginform.errors.email}</span>
            <input type='text' className='form-control mb-4' id="email" onChange={loginform.handleChange} value={loginform.values.email}/> */}
            
            <label htmlFor='password'>Password: </label>
            <span className='text-danger ms-3 '>{loginform.errors.password}</span>
            <input type='text' className='form-control mb-4' id="password" onChange={loginform.handleChange} value={loginform.values.password} />
            
            {/* <label htmlFor='password'>Confirm Password: </label>
            <span className='text-danger ms-3 '>{loginform.errors.confirmpassword}</span>
            <input type='password' className='form-control mb-4'id="confirmpassword" onChange={loginform.handleChange} value={loginform.values.confirmpassword}/> */}
            
            <button className='btn btn-primary' type='submit' disabled={loginform.isSubmitting}>{loginform.isSubmitting ? 'submitting...':'Login'}</button>
          </form>
        </div>
      </div>
      </div>
  )
}



export default Login