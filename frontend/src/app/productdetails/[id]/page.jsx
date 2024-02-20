'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IconHeart, IconHeartFilled, IconShoppingCart } from '@tabler/icons-react';


const ProductDetails = () => {

    const { id } = useParams();

    const [cart, setcart] = useState(0)

    const [productData, setProductData] = useState(null);

    const getProductDetails =  async () => {
        const res = await fetch('http://localhost:5500/handicraft/getbyid/'+id);
        console.log(res.status);

        const data = await res.json();

        console.log(data);
        setProductData(data);
    }

        useEffect(() => {
        getProductDetails();
        }, []);

    const displayDetails = () => {
        if(productData!==null){
            return <div className='container'>
                <div className='row g-0'>
                    <div className="col-md-4 mt-5">
                        <img src={productData.image} className='w-100 h-100' alt="" />
                    </div>
                    <div className='card col-md-8 mt-5'>

                    <div className="mt-5 p-5">
                        <h2>{productData.productname}</h2><br />

                        <h3>{productData.description}</h3><br />
                        <h4 className='badge bg-danger'>{productData.material}</h4><br />
                        <h3>₹{productData.price}</h3><br />
                       <div className='d-flex gap-5 align-items-center'> 
                            <button className='btn btn-primary '
                            onClick={()=>{setcart(cart+1)}}><IconShoppingCart/></button>
                            <h3 className='m-0'>Cart Value:{cart}</h3>
                            <button className='btn btn-dark'
                            onClick={()=>{setcart( cart>0 ? cart-1 : cart)}}><IconShoppingCart/></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        }else{
            return <h1>Loading... Please Wait</h1>
        }
    }
    

  return (
    <div>
        {displayDetails()}
    </div>
  )
}

export default ProductDetails;