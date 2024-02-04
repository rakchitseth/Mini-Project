'use client';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {

        const res = await fetch('http://localhost:5500/user/getall');
        console.log(res.status);

        const data = await res.json();
        console.table(data)
        setUserList(data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const deleteUser = async (id) => {
        const res = await fetch('http://localhost:5500/user/delete/'+id, {method: 'DELETE'});
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            enqueueSnackbar('User Delete', {variant: 'success'});
        }
    }

    const displayUsers = () => {
        return <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (user) => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <Link href={"/updateuser/"+user._id} className='btn btn-primary'>Edit</Link>
                            </td>
                            <td>
                                <button onClick={ () => {deleteUser(user._id)} } className='btn btn-danger'>Delete</button>
                            </td>
                            
                            {/* <td className='btn btn-success'></td> */}
                        </tr>
                    } )
                }
            </tbody>
        </table>
    }

    return (
        <div>
            <div className="container">
                {displayUsers()}
            </div>
        </div>
    )
}
export default ManageUser