import React from 'react';
import './ContactBody.css';

const ContactBody = () => {
    return (
        <form className="contact-form text-center">
            <h6 style={{ color:"#16D1C0"}}>CONTACT US</h6>
            <h3 className="text-white">Always Contact With Us</h3>
            <input type="text" className="email" placeholder="Your Email*" />
            <br />
            <input type="text" className="text" placeholder="Subject*" />
            <br />
            <textarea type="text" className="text textarea" placeholder="Your Massage*" />
            <br />
            <button className="btn btnStyle">SUBMIT</button>
        </form>
    );
};

export default ContactBody;