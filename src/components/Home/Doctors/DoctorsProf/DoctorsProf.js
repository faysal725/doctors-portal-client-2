import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorsProf.css'

const DoctorsProf = (props) => {
    console.log(props)
    
    const {image, name, phone} = props.dp 
    // console.log(name)
    
    return (
        <div  className="col-md-3">
            <img className="DoctorsProf__image img-fluid" src={image} alt="" />
            <h5><b>{name}</b></h5>
            <p><FontAwesomeIcon  icon={faPhone} />   {phone} </p>
        </div>
    );
};

export default DoctorsProf;