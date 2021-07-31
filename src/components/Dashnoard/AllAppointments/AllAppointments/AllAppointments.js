import React, { useEffect, useState } from 'react';
import AllAppointmentsDetails from '../AllAppointmentsDetails/AllAppointmentsDetails';
import Sidebar from '../../Sidebar/Sidebar';
import './AllAppointments.css';

const AllAppointments = () => {
    const [allAppointments, setAllAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAllAppointments(data))
    }, [])
    return (
        <div className="row allAppointments-container d-flex align-items-center">
            <div className="col-md-12 col-lg-2">
                <Sidebar />
            </div>
            <div className="col-md-12 col-lg-10 container  allPatientsBody">

                <h5 className="text-brand mb-5">All Patients</h5>
                <div className="row">
                    <div className="col-1">
                        <p>Si no:</p>
                    </div>
                    <div className="col-4">
                        <p>Name</p>
                    </div>
                    <div className="col-1">
                        <p>Gender</p>
                    </div>
                    <div className="col-1">
                        <p>Age</p>
                    </div>
                    <div className="col-1">
                        <p>Weight</p>
                    </div>
                    <div className="col-2">
                        <p>Phone</p>
                    </div>
                    <div className="col-2">
                        <p>Action</p>
                    </div>
                </div>
                {
                    allAppointments.map((allAppoint, index) => <AllAppointmentsDetails key={allAppoint._id} index={index} allAppoint={allAppoint} />)
                }
            </div>
        </div>
    );
};

export default AllAppointments;