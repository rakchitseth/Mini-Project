"use client";
import React, { useEffect, useState } from 'react'

const Home = () => {
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

  const displayhandicraftdata =() =>{
    return handicraftList.map((item)=>{
      return (
        <div key={item._id} className='col-md-3'>
          <div className='card'><img src={item.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.description}</p>
            <p className='badge bg-danger'>{item.material}</p>
            <h3>₹{item.price}</h3>
            <button className='btn btn-success'>Add to cart</button>
          </div>
          </div>
        </div>
        )
    })
  }
  return (
    <>
  <header>
  <div
  
  id="carouselExampleAutoplaying"
  className="carousel slide container-fill  "
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
      width={5000}
      height={500}
      
      src="https://imgs.search.brave.com/OwFTsjpBy3XC_Xj_zBt0W2ri6WNfLbl6T2SOVKLcuvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sb3QtcG90dGVy/eS10YWJsZV8yMTk3/NjYtNDk5MS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img
      width={5000}
      height={500}
      src="https://imgs.search.brave.com/8BCSC7TMAhg-q8tz5BnTFx_gC2PgjpQAaTyokrrjCgw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZXVwLWhh/bmRzLXlvdW5nLW1h/c3Rlci13aXRoLWxh/cmdlLWNsYXktcGxh/dGVfOTA3ODEtMTM5/LmpwZz9zaXplPTYy/NiZleHQ9anBn" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img
      width={5000}
      height={500}
      src="https://imgs.search.brave.com/7GMWsCqRxYRArzREgJ3jI_9pMlbeq6Wp8mN_7jo2PP8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YWNyYW1lLWFycmFu/Z2VtZW50LXdpdGgt/Y29weS1zcGFjZV8y/My0yMTQ5MDcyODg3/LmpwZz9zaXplPTYy/NiZleHQ9anBn" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  </header>
  <div className='row'><h3 style={{textAlign:'center'}}>Featured Collection</h3></div>
  <div className="container-fluid">
    <div className='row gy-2'>
    {
      displayhandicraftdata()
    }
    </div>
  </div>
   <div className="container-fill">
    <div className="row" style={{ minHeight: "30vh" }}>
      <div className="col-md-12">
        <img
          // width={3500}
          // height={500}
          className="img-fluid"
          src="https://www.handicraft.com/cdn/shop/files/arne_carlos_e1e38a05-8a34-42eb-96db-4f1afb528e46_2160x.jpg?v=1701108432"
          alt=""
        />
      </div>
    </div>
  </div> 
</>
  )
}

export default Home