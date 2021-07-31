import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar'
import InfoDashboardDetails from '../InfoDashboardDetails/InfoDashboardDetails';

const InfoDashboard = () => {
    const [dashboardDetails, setDashboardDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setDashboardDetails(data))
    }, [])
    return (
        <div className="row d-flex align-items-center allAppointments-container">
            <div className="col-lg-2 col-md-12">
                <Sidebar/>
            </div>
            <div className="col-lg-10 col-md-12 allPatientsBody">
                <div className="row">
                    <div className="col-1">
                        <p>Si no:</p>
                    </div>
                    <div className="col-3">
                        <p>Date-time</p>
                    </div>
                    <div className="col-3">
                        <p>Name</p>
                    </div>
                    <div className="col-2">
                        <p>Phone</p>
                    </div>
                    <div className="col-1">
                        <p>Prescription</p>
                    </div>
                    <div className="col-1">
                        <p>Action</p>
                    </div>
                    <div className="col-1">
                        <p>Action</p>
                    </div>
                </div>

                {
                    dashboardDetails.map((info, index) => <InfoDashboardDetails index={index} key={info._id} info={info}/>)
                }
            </div>
        </div>
    );
};

export default InfoDashboard;