import React from 'react';
import Header from '../Header/Header/Header'
import Blogs from '../Blogs/Blogs';
import Featured from '../Featured/Featured';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from '../Doctors/Doctors/Doctors';
import Contact from '../ContactForm/Contact/Contact';
import Footer from '../Footer/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Featured/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;