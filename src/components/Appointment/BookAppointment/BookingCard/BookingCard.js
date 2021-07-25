import React, { useState } from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import './BookingCard.css'

const BookingCard = ({ booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <div className="col-md-6 col-lg-4 mt-5">
            <div className="booking-Card-Container">
                <h4 className="text-brand">{booking.title}</h4>
                <strong className="text-brand2">{booking.time}</strong>
                <br />
                <p className="text-secondary mt-1" style={{ fontSize: "10px" }}>{booking.space}</p>
                <button onClick={openModal} className="btn btnStyle bookBtn">BOOK APPOINTMENT</button>
                <AppointmentForm bookDate={date} appointmentOn={booking.title} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
            </div>
        </div>
    );
};

export default BookingCard;