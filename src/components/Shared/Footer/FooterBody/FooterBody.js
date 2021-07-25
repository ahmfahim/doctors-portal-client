import React from 'react';
import './FooterBody.css';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';




const FooterBody = () => {
    return (
        <div className="d-flex justify-content-center mt-5 pt-5">
            <div className="container row">
                <div className="col-lg-3 col-md-6 d-flex align-items-center">
                    <div className="text-secondary">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h6 className="mb-5" style={{ color: "#16D1C0" }}>Services</h6>
                    <div className="text-secondary">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Check Up</p>
                        <hr />
                        <p>Check Up</p>
                        <p>Check Up</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h6 className="mb-5" style={{ color: "#16D1C0" }}>Orak Health</h6>
                    <div className="text-secondary">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <hr />
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <hr />
                        <p>Check Up</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h6 className="mb-5" style={{ color: "#16D1C0" }}>Our Address</h6>
                    <div className="text-secondary">
                        <p>Bogura-7983 road, Thonthonia</p>
                        <div className="social-icons" style={{ fontSize: "40px", color:"#16D1C0"}}>
                            <FaFacebook className="m-3" style={{ border: "1px solid #16D1C0", borderRadius: "100%", padding: "2px" }} /><FcGoogle className="m-3" style={{ border: "1px solid #16D1C0", borderRadius: "100%", padding: "2px" }} /><AiFillTwitterCircle className="m-3" style={{ border: "1px solid #16D1C0", borderRadius: "100%", padding: "2px" }}/>
                        </div>
                        <p className="mt-5">Call Now</p>
                        <button className="btn btnStyle">+088-382394348</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBody;