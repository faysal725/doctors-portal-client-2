import React from 'react';
import './AppointmentForm.css'
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '600px',
    width: '500px',
    borderRadius: '8px',
    textAlign: 'center',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    const onSubmit = data => {
      data.service = appointmentOn;
      data.date = changeDateFormat(date)
      data.created = new Date();

      fetch('http://localhost:5000/addAppointment/', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => {
        res.json()
        closeModal();
        console.log('appointment created successfully')
      })

      // .then(success =>{
      //   if(success){
      //     // closeModal();
      //     console.log('APointment created successfully')
      
      //   }

      //   })
      

    };


    function changeDateFormat(date) {
      const date3 =date
      const date2 = new Date(date3)
      date2.setDate(date2.getDate() + 1)
      const date1 = date2.toISOString().split('T')[0]
      return date1
  }

    return (
        <div>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                
                >
                    
                
                {/* <button onClick={closeModal}>close</button> */}
                
                
                  <form  onSubmit={handleSubmit(onSubmit)}  className="AppointmentForm__inputs">
                  <h2 className="text-brand">{appointmentOn}</h2>
                  <p className="text-secondary text-center"><small >{date.toDateString()}</small></p>
                  <br />
                  <br />
                      <input placeholder="Your Name" {...register("name", {required: true})} />
                      <br />
                      {errors.name &&  <span className="text-danger">This field is required</span>}
                      <br />
                      <input placeholder="Phone Number" {...register("PhoneNumber", {required: true})} />
                      <br />
                      {errors.PhoneNumber &&  <span className="text-danger">This field is required</span>}
                      <br />
                      <input placeholder="Email" type="text" {...register("Email", {required: true})} />
                      <br />
                      {errors.Email &&  <span className="text-danger">This field is required</span>}
                      <br />

                      <input placeholder="age" {...register("age", {required: true})} />
                      <br />
                      {errors.age &&  <span className="text-danger">This field is required</span>}
                      <br />
                      <input placeholder="weight" type="number" {...register("weight", {required: true})} />
                      <br />
                      {errors.weight &&  <span className="text-danger">This field is required</span>}
                      <br />
                      
                      <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                      </select>
                      <br /><br />
                      <input className="btn-brand" type="submit" />
                    </form>

                </Modal>
    </div>
    );
};

export default AppointmentForm;