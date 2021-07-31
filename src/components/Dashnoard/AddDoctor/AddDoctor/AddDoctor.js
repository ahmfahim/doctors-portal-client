import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AddDoctorForm from '../AddDoctorForm/AddDoctorForm';

const AddDoctor = () => {
    return (
        <div className="row d-flex align-items-center allAppointments-container">
            <div className="col-lg-2 col-md-12">
                <Sidebar />
            </div>
            <div className="col-lg-10">
                <h3 className="text-brand mb-5">ADD DOCTOR</h3>
                <AddDoctorForm/>
            </div>
        </div>
    );
};

export default AddDoctor;