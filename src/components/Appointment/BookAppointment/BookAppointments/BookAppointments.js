import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
       id:1,
       title:"Teeth Orthodontics",
       time:"8:00 AM - 9:00 AM",
       space:"10 SPACES AVAILABLE" 
    },
    {
        id: 2,
        title: "Cosmetic Dentistry",
        time: "10:05 AM - 11:30 AM",
        space: "10 SPACES AVAILABLE"
    }, 
    {
        id: 3,
        title: "Teeth Cleaning",
        time: "5:00 PM - 6:30 PM",
        space: "10 SPACES AVAILABLE"
    },
    {
        id: 4,
        title: "Cavity Protection",
        time: "7:00 PM - 9:00 PM",
        space: "10 SPACES AVAILABLE"
    },
    {
        id: 5,
        title: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: "10 SPACES AVAILABLE"
    },
    {
        id: 6,
        title: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: "10 SPACES AVAILABLE"
    }
]

const BookAppointments = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand appointment-title">Available Appointments on {date.toDateString()}</h2>
            <div className="d-flex justify-content-center">
                <div className="row container text-center mt-4">
                    {
                        bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointments;