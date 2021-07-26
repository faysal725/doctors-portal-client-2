import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './BlogDetails.css'

const BlogDetails = (props) => {
    // console.log(props.info)
    const {name, date, heading, description, image}= props.info
    return (
        <div className="col-md-3 BlogDetails__full">
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                    <img className="BlogDetails__image" src={image} alt="" />
                </div>
                <div className="p-2 bd-highlight blog__name">
                    <h6><b>{name}</b></h6>
                    <p className="text-secondary">{date}</p>
                </div>
            </div>
            <p><b>{heading}</b></p>
            <p>{description}</p>
            <FontAwesomeIcon className="BlogDetails__arrow" icon={faArrowRight} size='2x' />
        </div>
    );
};

export default BlogDetails;