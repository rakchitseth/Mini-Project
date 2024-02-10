"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [handicraftList, sethandicraftList] = useState([]);

  const [cart, setcart] = useState(0)

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

  const displayhandicraftdata = () => {
    return handicraftList.map((item) => {
      return (
        <div key={item._id} className='col-md-3'>
          <div className='card '>
            <div className='card'><img src={item.image} alt="" />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <p className='badge bg-danger'>{item.material}</p>
                <h3>₹{item.price}</h3>
                <Link href={'/productdetails/' + item._id} className='btn btn-success'>Details</Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <>
      <header className='container-fluid'>
        <div

          id="carouselExampleAutoplaying"
          className="carousel slide container-fill  "
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                width={5000}
                height={500}

                src="https://img.freepik.com/premium-photo/hand-made-textile-hearts-balls-cotton-background-textile-handicraft-neutral-colors-wintertime-cherry-flower-twigs-monochromatic-look-banner-composition-with-copyspace_87646-10534.jpg?w=2000" className="d-block w-100" alt="..." />
              <div className='card-img-overlay text-white d-flex justify-content-end align-items-center'>
                <div className="container p-5">
                  <h1 className='display-3'>Khazana Handicraft</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim recusandae<br /> facilis laudantium optio in iure mollitia animi consectetur. Recusandae?</p>
                </div>
              </div>
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
      <div className='row'><h3 style={{ textAlign: 'center' }}>Featured Collection</h3></div>
      <div className="container-fluid">
        <div className='row gy-2'>
          {
            displayhandicraftdata()
          }
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row gx-0" style={{ minHeight: "30vh" }}>
          <div className="col-md-8">
            <img
              // width={3500}
              // height={500}
              className="w-100"
              src="https://www.handicraft.com/cdn/shop/files/arne_carlos_e1e38a05-8a34-42eb-96db-4f1afb528e46_2160x.jpg?v=1701108432"
              alt=""
            />
          </div>
          <div className="col-md-4">
            <div className='card  second h-100'>
              <div className='card-body text-white'>
                <br />
                <h1>Latest Collections</h1>
                <h4 className='mt-5'>All types of handicrafts at one place</h4>
                <a href="/Addhandicraft" className='btn btn-outline-light w-75 mt-5'>Add your's Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home