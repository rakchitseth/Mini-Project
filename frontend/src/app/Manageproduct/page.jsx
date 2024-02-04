'use client';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [handicraftList, sethandicraftList] = useState([]);

    const fetchUserData = async () => {
  
        const res = await fetch('http://localhost:5500/handicraft/getall');
        console.log(res.status);
  
        const data = await res.json();
        console.table(data)
        sethandicraftList(data);
    }
  
    useEffect(() => {
        fetchUserData();
    }, []);

    const deleteUser = async (id) => {
        const res = await fetch('http://localhost:5500/handicraft/delete/'+id, {method: 'DELETE'});
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
                    <th>productname</th>
                    {/* <th>image</th> */}
                    <th>description</th>
                    <th>material</th>
                    <th>price</th>
                    
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    handicraftList.map( (user) => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.productname}</td>
                            {/* <td>{user.image}</td> */}
                            <td>{user.description}</td>
                            <td>{user.material}</td>
                            <td>{user.price} </td>
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