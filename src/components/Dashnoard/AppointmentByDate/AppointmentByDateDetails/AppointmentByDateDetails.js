import React from 'react';
import './AppointmentByDateDetails.css'

const AppointmentByDateDetails = ({appointment}) => {
    return (
        <div className="col-12 ">
            <div className="row mt-3 d-flex align-items-center">
                <div className="col-3 column d-flex align-items-center">
                    <strong>{appointment.name}</strong>
                </div>
                <div className="col-3 column d-flex align-items-center">
                    <strong>{appointment.gender}</strong>
                </div>
                <div className="col-3 column d-flex align-items-center">
                    <strong>{appointment.phone}</strong>
                </div>
                <div className="col-3 column d-flex align-items-center">
                    <button className="btn btnStyle appVisitBtn">Not Visited</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentByDateDetails;