import React from 'react';

const InfoDashboardDetails = ({info, index}) => {
    return (
        <div className="row ">
            <div className="col-1 column d-flex align-items-center">
                <p>{index + 1}</p>
            </div>
            <div className="col-3 column d-flex align-items-center">
                <p>{info.bookDate}</p>
            </div>
            <div className="col-3 column d-flex align-items-center">
                <p>{info.name}</p>
            </div>
            <div className="col-2 column d-flex align-items-center">
                <p>+{info.phone}</p>
            </div>
            <div className="col-1 column d-flex align-items-center">
                <button className="btn btnStyle">View</button>
            </div>
            <div className="col-1 column d-flex align-items-center">
                <button className="btn btn-primary">Pending</button>
            </div>
            <div className="col-1 column d-flex align-items-center">
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default InfoDashboardDetails;