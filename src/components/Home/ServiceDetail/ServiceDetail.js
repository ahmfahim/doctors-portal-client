import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <img className="img-fluid" style={{width:"50px"}} src={service.img} alt="" className="service-l" />
                <h5 style={{ color: "#3A4256" }} className="mt-3 mb-4">{service.name}</h5>
                <small className="text-secondary">{service.description}</small>
            </div>
        </div>
    );
};

export default ServiceDetail;