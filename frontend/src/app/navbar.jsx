// import Link from 'next/link'

import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/logo_h.png" height={50} alt="" />
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
              <Link className="nav-link" href="/Mens">
                Mens
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
                Womens
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Kurtis
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Sarees
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Sharara
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Leggings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Suit Stiched
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Suit Length
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Inner Wear
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gowns
                  </a>
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
          <ul>
            <li className="nav-item">
            <Link className="nav-link" href="/Signup">
            Signup
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}




export default Navbar;