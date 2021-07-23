import React from 'react';
import doctorImg from '../../../images/5790-removebg.png'

const MakeAppointmentInfo = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <img className="appointmentImg img-fluid" src={doctorImg} alt="" />
                </div>
                <div className="col-6">
                        <h6 className="mt-4" style={{ color: "#17D2BA"}}>APPOINTMENT</h6>
                    <h2 className="text-white mt-3">Make an appointment <br/> Today</h2>
                    <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex deserunt ea?</p>
                    <button className="btn mt-3 btnStyle">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointmentInfo;