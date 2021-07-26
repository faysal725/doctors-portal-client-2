import React from 'react';
import chair from '../../images/chair.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#203047"}}>your new smile <br /> starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, possimus rerum qui alias autem ut?</p>
                
                <div className="btn basic__button">Get appointment</div>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;