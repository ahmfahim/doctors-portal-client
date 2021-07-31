import React from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import {Link} from 'react-router-dom';

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
                            <Link class="nav-link ms-5 text-dark" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-dark" to="/appointment">Appointment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-dark" to="/dashboard/infoDashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white " aria-current="page" to="#">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white " to="#">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-white " to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;