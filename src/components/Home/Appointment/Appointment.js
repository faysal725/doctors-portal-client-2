import React from 'react';
import appointChair from '../../../images/appointChair.png';
import appointment from '../../../images/appointment.png';
import './Appointment.css';




const Appointment = () => {
    return (
        <section style={{marginTop:"300px"}} className="appointment-container">


            <div className="row d-flex appointment__section">
                <div className="col-md-4 appointment__section__img">
                    <img className="doctor" src={appointment} alt="" />
                </div>
                <div className="col-md-8 appointment__section__description">
                    
                    <h3><b>APPOINTMENT</b></h3>
                    <h1>Make an appoinment <br />Today</h1>

                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste esse molestias! Pariatur, error tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis quas repudiandae reiciendis sed fuga, quo nulla consectetur praesentium natus.</p>
                    <br /><br />
                    <button className="appointment__button">LEARN MORE</button>
                </div>
                </div>
        </section>
    );
};

export default Appointment;