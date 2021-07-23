import React from 'react';
import Blogs from '../Blogs/Blogs';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Featured/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
        </div>
    );
};

export default Home;