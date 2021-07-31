import React from 'react';
import './AppointmentByDate.css';
import AppointmentByDateDetails from '../AppointmentByDateDetails/AppointmentByDateDetails';
import { FcCalendar } from 'react-icons/fc';
const AppointmentByDate = ({ appointments,date }) => {
   
    return (
        <div className="text-left container appointmentByDate-container">
            <div className="row">
                <div className="col-8">
                    <h3 className="text-brand mb-5">Appointment : {appointments.length}</h3>
                </div>
                <div className="col-4">
                    <button className="btn "><FcCalendar style={{ fontSize: "30px" }} /> <strong className="text-brand2">{date.toDateString()}</strong> </button>
                </div>
                
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3"><strong>Name</strong></div>
                        <div className="col-3"><strong>Gender</strong></div>
                        <div className="col-3"><strong>Phone</strong></div>
                        <div className="col-3"><strong>Action</strong></div>
                    </div>
                </div>
                
                {
                    appointments.length ?
                    appointments.map((appointment => <AppointmentByDateDetails key={appointment._id} appointment={appointment}></AppointmentByDateDetails>))
                    :
                    <div>
                        <h4 className="text-center text-brand mt-5">No Appointments for this date</h4>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default AppointmentByDate;