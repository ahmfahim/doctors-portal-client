import React from 'react';
import './Testimonial.css';

const Testimonial = ({ testimonialInfo}) => {
    return (
        <div className="col-md-4">
            <div className="testimonial-card">
                <div className="mb-5 mt-3">
                    <small className="text-secondary">{testimonialInfo.description}</small>
                </div>
                <div className="d-flex">
                    <img className="img-fluid ms-3" src={testimonialInfo.imgUrl} alt="" />
                    <div className="ms-3 mt-3">
                        <h5 style={{ color: "#17D2BA" }}>{testimonialInfo.name}</h5>
                        <small className="text-secondary">{testimonialInfo.address}</small>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Testimonial;