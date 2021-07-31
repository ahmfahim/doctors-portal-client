import React, { useEffect, useState } from 'react';
import img1 from '../../../../images/5790-removebg.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        id: 1,
        name: "Dr. Supro proti Ghangra",
        img: img1,
        phone: "+088-53835334"
    },
    {
        id: 2,
        name: "Dr. Supro proti Ghangra",
        img: img1,
        phone: "+088-53835334"
    },
    {   
        id: 3,
        name: "Dr. Supro proti Ghangra",
        img: img1,
        phone: "+088-53835334"
    }
]

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section className="container mt-5 pt-5">
            <div className="text-center mt-3 pb-5">
                <h5 style={{ color: "#18D2B4" }}>Our Doctors <hr/></h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row text-center">
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctorInfo={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;