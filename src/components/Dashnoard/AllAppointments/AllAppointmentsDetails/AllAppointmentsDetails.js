import React from 'react';
import './AllAppointmentDetails.css';

const AllAppointmentsDetails = ({allAppoint,index}) => {
    return (
        <div className="row mt-3">
            <div className="col-1 column d-flex align-items-center">
                <p>{index + 1}</p>
            </div>
            <div className="col-4 column d-flex align-items-center">
                <p>{allAppoint.name}</p>
            </div>
            <div className="col-1 column d-flex align-items-center">
                <p>{allAppoint.gender}</p>
            </div>
            <div className="col-1 column d-flex align-items-center">
                <p>{allAppoint.age}</p>
            </div>
            <div className="col-1 column d-flex align-items-center">
                <p>{allAppoint.Weight}</p>
            </div>
            <div className="col-2 column d-flex align-items-center">
                <p>+{allAppoint.phone}</p>
            </div>
            <div className="col-2 column d-flex align-items-center">
                <button className="btn btnStyle">View</button>
            </div>
        </div>
    );
};

export default AllAppointmentsDetails;