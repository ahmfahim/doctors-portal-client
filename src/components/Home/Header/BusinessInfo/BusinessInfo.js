import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { FcAlarmClock, FcCallTransfer } from 'react-icons/fc';
import { ImLocation } from 'react-icons/im';

const infosData = [
    {
        id: 1,
        title:"Opening Hours",
        description:"We are open 7 days",
        icon: FcAlarmClock,
        background:"success"
    },
    {
        id: 2,
        title: "Visit Our Location",
        description: "Bogura, Popular Diagonostic Center",
        icon: ImLocation,
        background: "dark"
    },
    {
        id: 3,
        title: "Call Us Now",
        description: "+088-43461235",
        icon: FcCallTransfer,
        background: "success"
    }
]
 

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map((info => <InfoCard key={info.id} info={info} />))
                }
            </div>
        </section>
    );
};

export default BusinessInfo;