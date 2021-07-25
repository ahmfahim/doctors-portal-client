import React from 'react';
import chair from '../../../images/Mask Group 1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css';
const AppointmentHeader = ({ handleDateChange}) => {
    
    return (
        <main style={{ height: "600px" }} className="row  d-flex align-items-center AppointmentHeader-container">
            <div className="col-md-4 offset-md-1 headerMainImg">
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                <Calendar className="calenderStyle"
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 AppointmentHeaderImg ">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;