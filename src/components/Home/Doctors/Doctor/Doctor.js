import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const Doctor = ({ doctorInfo}) => {
    return (
        <div className="col-md-4">
            <img className="img-fluid" src={doctorInfo.img} alt="" />
            <h6 style={{color:"#3A4256"}}>{doctorInfo.name}</h6>
            <i className="text-secondary"><FiPhoneCall/>{doctorInfo.phone}</i>
        </div>
    );
};

export default Doctor;