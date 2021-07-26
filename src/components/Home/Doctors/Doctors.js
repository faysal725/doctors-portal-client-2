import React from 'react';
import './Doctors.css';
import appointment from '../../../images/appointment.png';
import DoctorsProf from './DoctorsProf/DoctorsProf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



const doctorProfile = [
    {
        image: appointment,
        name: "Dr. Caudi",
        phone: +880145046054
    },
    {
        image: appointment,
        name: "Dr. Gwan",
        phone: +8801545446054
    },
    {
        image: appointment,
        name: "Dr. Stacy",
        phone: +880145046053
    },
]


const Doctors = () => {
    return (
        <div className="container doctors__full">
            <br /><br /><br />
            <div>
            <h5 style={{textAlign:"center" , color: "#15D2C6"}}><b>Our Doctors</b></h5>
            </div>
            <div>
                <div style={{textAlign:"center"}} className="row justify-content-center">
                    {
                        doctorProfile.map(dp => <DoctorsProf dp={dp}></DoctorsProf>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;