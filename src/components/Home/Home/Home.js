import React from 'react';
import Appointment from '../Appointment/Appointment';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;