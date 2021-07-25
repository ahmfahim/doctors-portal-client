import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointments from '../BookAppointment/BookAppointments/BookAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader handleDateChange={handleDateChange}/>
            <BookAppointments date={selectedDate} />
            <Footer/>
        </div>
    );
};

export default Appointment;