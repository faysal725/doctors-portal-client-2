import React from 'react';
import './ContactUs.css';
import { useForm } from "react-hook-form";







const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    console.log(watch("example"));
    return (
        <div className="contact__Full">
            <div className="contact__image">
                <div className="contact__color">
                    <div className="contact__heading">
                        
                        <h5><b>CONTACT US</b></h5>
                        <h2>Always Connect With Us</h2>
                    </div>
                    <div className="contact__form">


                        <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder="Email" {...register("email")} />
                            <br /><br />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input placeholder="Subject" {...register("subject", { required: true })} />
                        
                            <br /><br />

                        <textarea placeholder="Message" {...register("message", { required: true })} />
                            <br /><br />
                        <input className="submit__btn" type="submit" value="Submit"/>
                        </form>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;