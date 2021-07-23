import React from 'react';
import fluorideImg from "../../../images/001-dental.png";
import cavitiesImg from "../../../images/tooth (1).png";
import teethWhiteImg from "../../../images/tooth.png";
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name:'Fluoride Treatment',
        description:'Lorem ipsum dolor, sit  atque voluptatibus adipisci numquam amet. Consequuntur, mollitia minus.',
        img:fluorideImg,
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet   voluptatibus adipisci numquam amet. Consequuntur, mollitia minus.',
        img: cavitiesImg,
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet necessitatibus amet. Consequuntur, mollitia minus.',
        img: teethWhiteImg,
    }
]

const Services = () => {
    return (
        <section className="services-container mt-3">
            <div className="text-center">
                <h6 style={{ color:"#17D2BE"}}>OUR SERVICES</h6>
                <h2 style={{ color:"#3A4256"}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 mt-5 pt-5 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
            
            
        </section>
    );
};

export default Services;