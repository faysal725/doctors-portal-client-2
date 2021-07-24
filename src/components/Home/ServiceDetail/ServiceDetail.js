import React from 'react';

const ServiceDetail = ({Service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:"50px"}} src={Service.img} alt="" />
            <h5 className="mt-3 mb-3">{Service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, optio.</p>
        </div>
    );
};

export default ServiceDetail;