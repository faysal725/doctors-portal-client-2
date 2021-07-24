import React from 'react';
import cavity from '../../../images/cavityFlle.png';
import floride from '../../../images/floride.png';
import toothWhite from '../../../images/toothWhite.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';




const serviceData = [
    {
        name:"Floride Treatement",
        img: floride
    },
    {
        name:"Cavity Filling",
        img: cavity
    },
    {
        name:"Teeth Whitining",
        img: toothWhite
    }
]


const Service = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                
                <h5 style={{color:"#1CC7C1"}}>Our Services</h5>
                <h2>SERVICES WE PROVIDE</h2>
        
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">

            {
                serviceData.map(Service =>  <ServiceDetail Service={Service}></ServiceDetail> )
            }
            </div>
            </div>
        </section>
    );
};

export default Service;