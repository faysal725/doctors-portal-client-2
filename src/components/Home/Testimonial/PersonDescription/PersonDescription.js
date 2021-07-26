import React from 'react';
import './PersonDescription.css'

const PersonDescription = (props) => {
    console.log(props.description)
    const {name, description, address,image}= props.description
    console.log(props.description.image)
    return (
        <div className="col-md-3 personDescription__full">
            <p>{description}</p>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                    <img className="PersonDescription__image" src={image} alt="" />
                </div>
                <div className="p-2 bd-highlight person__name">
                    <h6><b>{name}</b></h6>
                    <p className="text-secondary">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonDescription;