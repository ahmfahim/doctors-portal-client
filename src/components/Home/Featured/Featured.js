import React from 'react';
import featuredImg from '../../../images/Mask Group 3.png'

const Featured = () => {
    return (
        <div className="d-flex justify-content-center mt-5 pt-5">
            <div className="w-75 row">
                <div className="col-md-6">
                    <img style={{ height:"400px", width:"100%" }}className="img-fluid" src={featuredImg} alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className="mb-5 mt-3">Exceptional Dental Care, <br/> on Your Terms</h3>
                    <small className="text-secondary"> Voluptate autem eos dicta amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt beatae, iure in labore iusto nisi quaerat, esse recusandae error fuga nulla! Voluptate autem eos dicta amet, quam expedita assumenda. dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliquid? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, distinctio dolores quos numquam quod aspernatur fugiat sit alias suscipit repellat?
                    </small>
                    <br />
                    <button className="btn mt-5 btnStyle">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;