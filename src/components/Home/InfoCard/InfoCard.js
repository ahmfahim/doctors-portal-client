import React from 'react';
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center align-items-center info-container info-${info.background}`}>
                <div className="mr-3">
                    <info.icon className="infoIcon m-3"/>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;