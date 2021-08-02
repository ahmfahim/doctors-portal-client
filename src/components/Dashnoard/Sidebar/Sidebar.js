import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar, AiFillSetting } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaFilePrescription } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { BsNewspaper } from 'react-icons/bs';
import { GiDoctorFace } from 'react-icons/gi';
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctorMatch', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    return (
        <div className="Sidebar-container sidebar d-flex flex-column justify-content-between col-md-2 py-5 " style={{ height: "100vh" }}>
            <Link to='/' className="ms-3 sidebar-link">Go Home</Link>
            <ul className="list-unstyled">
                { isDoctor ?
                    <div>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/infoDashboard" className="sidebar-link "><CgMenuGridR className="dash-icons" /><span> Dashboard</span></Link>
                        </li>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/appointment" className="sidebar-link"><AiOutlineCalendar className="dash-icons" /><span>Appointment</span></Link>
                        </li>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/allAppointments" className="sidebar-link"><BsNewspaper className="dash-icons" /> <span>All Appointments</span></Link>
                        </li>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/infoDashboard" className="sidebar-link"><IoIosPeople className="dash-icons" /> <span>Patients</span></Link>
                        </li>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/infoDashboard" className="sidebar-link"><FaFilePrescription className="dash-icons" /><span> Prescriptions</span></Link>
                        </li>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/addDoctor" className="sidebar-link"><GiDoctorFace className="dash-icons" /> <span>Add Doctor</span></Link>
                        </li>
                        <li className="sidebar-linkStyle">
                            <Link to="/dashboard/infoDashboard" className="sidebar-link"><AiFillSetting className="dash-icons" /> <span>Setting</span></Link>
                        </li>
                    </div> :
                    <li className="sidebar-linkStyle">
                        <Link to="/dashboard/appointment" className="sidebar-link"><AiOutlineCalendar className="dash-icons" /><span>Appointment</span></Link>
                    </li>

                }
            </ul>
            <div className='sidebar-linkStyle'>
                <Link to="/" className="sidebar-link"><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;