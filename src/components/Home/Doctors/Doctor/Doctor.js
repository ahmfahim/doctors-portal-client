import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const Doctor = ({ doctorInfo}) => {
    return (
        <div className="col-md-4">
            <div className="container">
                <img className="img-fluid" src={doctorInfo.imageURL} alt="" />
                <h6 style={{ color: "#3A4256" }}>{doctorInfo.name}</h6>
                <i className="text-secondary"><FiPhoneCall />{doctorInfo.email}</i>
            </div>
        </div>
    );
};

export default Doctor;