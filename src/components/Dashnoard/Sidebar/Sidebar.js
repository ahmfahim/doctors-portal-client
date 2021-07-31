import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import { AiOutlineCalendar, AiFillSetting} from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaFilePrescription } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { BsNewspaper } from 'react-icons/bs';
import { GiDoctorFace } from 'react-icons/gi';





const Sidebar = () => {
    return (
        <div className="Sidebar-container">
            <Link to='/' className="ms-3 sidebar-link">Go Home</Link>
            <div className="all-link">
                <p className="sidebar-linkStyle">
                    <CgMenuGridR className="dash-icons" />
                    <Link to="/dashboard/infoDashboard" className="sidebar-link ">Dashboard</Link>
                </p>
                <p className="sidebar-linkStyle">
                    <AiOutlineCalendar className="dash-icons" />
                    <Link to="/dashboard/appointment" className="sidebar-link">Appointment</Link>
                </p>
                <p className="sidebar-linkStyle">
                    <BsNewspaper className="dash-icons" />
                    <Link to="/dashboard/allAppointments" className="sidebar-link">All Appointments</Link>
                </p>
                <p className="sidebar-linkStyle">
                    <IoIosPeople className="dash-icons" />
                    <Link to="/dashboard/infoDashboard" className="sidebar-link">Patients</Link>
                </p>
                <p className="sidebar-linkStyle">
                    <FaFilePrescription className="dash-icons" />
                    <Link to="/dashboard/infoDashboard" className="sidebar-link">Prescriptions</Link>
                </p>
                <p className="sidebar-linkStyle">
                    <GiDoctorFace className="dash-icons" />
                    <Link to="/dashboard/addDoctor" className="sidebar-link">Add Doctor</Link>
                </p>
                <p className="sidebar-linkStyle">
                    <AiFillSetting className="dash-icons" />
                    <Link to="/dashboard/infoDashboard" className="sidebar-link">Setting</Link>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;