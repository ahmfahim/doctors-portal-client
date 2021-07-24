import React from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark navBG">
            <div class="container">
                <h3 className="logo">DP-Hospital</h3>
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <BiMenuAltRight style={{fontSize:"30px",outline:"none"}}/>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-dark" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-dark" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white " aria-current="page" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white " href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-white " href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;