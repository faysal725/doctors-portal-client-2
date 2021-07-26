import React from 'react';
import './Testimonial.css';
import ellipse1 from '../../../images/Ellipse 1.png';
import ellipse2 from '../../../images/Ellipse 2.png';
import ellipse3 from '../../../images/Ellipse 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import PersonDescription from './PersonDescription/PersonDescription';


const personDescription=[
    {
        name: 'Winson Herry',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id repudiandae ipsa amet consectetur perspiciatis at possimus beatae exercitationem et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde dolor saepe accusantium at assumenda ad laudantium dolore ullam sint!",
        address: "california",
        image: ellipse1,
    },
    {
        name: 'Ranson Herry',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id repudiandae ipsa amet consectetur perspiciatis at possimus beatae exercitationem et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde dolor saepe accusantium at assumenda ad laudantium dolore ullam sint!",
        address: "california",
        image: ellipse2,
    },
    {
        name: 'Windy Herry',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id repudiandae ipsa amet consectetur perspiciatis at possimus beatae exercitationem et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde dolor saepe accusantium at assumenda ad laudantium dolore ullam sint!",
        address: "california",
        image: ellipse3,
    }
]

const Testimonial = () => {
    return (
        <div>
            <br /><br />
            <div className="justify-content-center container">

            <div className="row d-flex pt-5">
                <div className="col-md-8 ps-5">
                    <h3 style={{color:"#62C8C8"}}><b>Testimonial</b></h3>
                    <h2><b>Whats Our Patients <br />Says</b></h2>
                </div>
                <div className="col-md-3" style={{textAlign:"end"}}>
                    <FontAwesomeIcon className="quote" icon={faQuoteLeft} size='8x' />
                </div>
            </div>
                <br /><br />
                <div className="container">
                    
                    <div style={{justifyContent:"center"}} className="row">

                    {
                        personDescription.map(pd => <PersonDescription description={pd}></PersonDescription>)
                    }
                    </div>
                    <br /><br />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;