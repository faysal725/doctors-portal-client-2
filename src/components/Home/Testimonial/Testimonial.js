import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
    return (
        <div>
            <div className="row d-flex pt-5">
                <div className="col-md-8 ps-5">
                    <h3>Testimonial</h3>
                    <h2>Whats Our Patients <br />Says</h2>
                </div>
                <div className="col-md-3">
                    <FontAwesomeIcon icon={faQuoteLeft} size='8x' />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Testimonial;