import React from 'react';
import exceptional from '../../../images/exceptional.png'

const Exceptional = () => {
    return (
        <section className="d-flex justify-content-center pt-5">
            <div className="row w-75">
            <div className="col-md-6" >
                {/* <img style={{height:"800px", width:"600px"}} src={exceptional} alt="" /> */}
                <img className="img-fluid" src={exceptional} alt="" />
            </div>
            <div className="col-md-6">
                <h1 style={{color:"#3A4256"}} className="pb-3">Exceptional Dental <br />Care, on your terms </h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quidem odit aperiam, sunt eveniet et explicabo ea. Id dolorum molestiae qui vero illo quas quaerat eligendi fugiat reiciendis, omnis obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium facere culpa corporis aliquam architecto modi quisquam nihil quam sit. Voluptas.</p>

                <br /><br />
                <button className="btn-primary">Learn More</button>
            </div>
            </div>
        </section>


    );
};

export default Exceptional;