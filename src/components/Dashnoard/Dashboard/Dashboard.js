import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import {UserContext} from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
 
    const handleDateChange = date => {
        setSelectedDate(date);  
    }

    useEffect(()=>{
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date:selectedDate, email:loggedInUser.email})
        })
            .then(response => response.json())
            .then(data => setAppointments(data))
    },[selectedDate])

    return (
        <section>
            <div className="row dashboard-container">
                <div className="col-md-12 col-lg-2">
                    <Sidebar/>
                </div>
                <div className="col-md-12 col-lg-3 d-flex align-items-center">
                    <div className="DashboardCalender container d-flex align-items-center">
                        <Calendar className="calenderStyle"
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>  
                </div>
                <div className="col-md-12 container appointmentBody col-lg-7 d-flex align-items-center">
                    <AppointmentByDate appointments={appointments} date={selectedDate} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;