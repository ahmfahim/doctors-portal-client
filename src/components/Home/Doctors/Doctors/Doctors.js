import React from 'react';
import img1 from '../../../../images/5790-removebg.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        name: "Dr. Supro proti Ghangra",
        img: img1,
        phone: "+088-53835334"
    },
    {
        name: "Dr. Supro proti Ghangra",
        img: img1,
        phone: "+088-53835334"
    },
    {
        name: "Dr. Supro proti Ghangra",
        img: img1,
        phone: "+088-53835334"
    }
]

const Doctors = () => {
    return (
        <section className="container mt-5 pt-5">
            <div className="text-center mt-3 pb-5">
                <h5 style={{ color: "#18D2B4" }}>Our Doctors <hr/></h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row text-center">
                    {
                        doctorsData.map(doctor => <Doctor doctorInfo={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;