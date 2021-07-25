import React from 'react';
import './HeaderMain.css';
import {Link} from 'react-router-dom';
import chair from '../../../../images/Mask Group 1.png'

const HeaderMain = () => {
    return (
        <main style={{ height: "600px" }} className="row  d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 headerMainImg">
                <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis molestias sint porro sunt, veniam odit.</p>
                <Link to="/appointment"><button class="btn btnStyle">Get Appointment</button></Link>
            </div>
            <div className="col-md-6 headerMainImg">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;