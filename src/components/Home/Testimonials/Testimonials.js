import React from 'react';
import winsonImg from '../../../images/Ellipse 1.png';
import SaraImg from '../../../images/Ellipse 2.png';
import SarikaImg from '../../../images/Ellipse 3.png';
import Testimonial from '../Testimonial/Testimonial';
import "./Testimonials.css";
import quotes from "../../../images/quote.png";

const testimonialData = [
    {
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime hic adipisci molestiae nulla nesciunt dignissimos odit doloribus delectus debitis minus! ",
        name: "Winson Herry",
        address: "Dhaka",
        imgUrl: winsonImg
    },
    {
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime hic adipisci molestiae nulla nesciunt dignissimos odit doloribus delectus debitis minus! ",
        name: "Sara",
        address: "Rongpur",
        imgUrl: SaraImg
    },
    {
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime hic adipisci molestiae nulla nesciunt dignissimos odit doloribus delectus debitis minus! ",
        name: "Sarika",
        address: "Bogura",
        imgUrl: SarikaImg
    }
]

const Testimonials = () => {
    return (
        <div className="mt-5 pt-5 container mb-5 testimonials-container">
            <div className="row">
                <div className="col-8">
                    <div className="pt-5">
                        <h6 className="mb-4" style={{ color: "#17D2BA" }}>TESTIMONIAL</h6>
                        <h2 className="mb-5 pb-3" style={{ color: "#3A4256" }}>What's Our Patients <br />Says</h2>
                    </div>
                </div>
                <div className="col-4">
                    <img className="img-fluid" src={quotes} alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonialInfo={testimonial} />)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Testimonials;