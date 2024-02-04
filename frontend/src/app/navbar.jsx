// import Link from 'next/link'
'use client';
import Link from "next/link";
import React, { useState } from "react";
import useAppContext from "./AppContext";
const Navbar = () => {

  const {loggedin,logout} =useAppContext();



  const showuseroptions = () => {
    if (loggedin) {
      return <li className="nav-item">
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </li>
    } else {
      return <>
        <li className="nav-item">
          <Link className="nav-link" href="/Signup">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Login">
            Login
          </Link>
        </li>
      </>
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Khazana Handicraft
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/Addhandicraft">
                AddHandicraft
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Browse All
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>



          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {showuseroptions()}

          </ul>
        </div>
      </div>
    </nav>

  );
}




export default Navbar;