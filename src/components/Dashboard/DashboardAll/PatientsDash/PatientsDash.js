import React, { useState, useEffect } from 'react';
import './PatientsDash.css';
import Select from 'react-select'




const options = [
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'cancel', label: 'Cancel' }
  ]



const PatientsDash = (props) => {

    const {_id, name, PhoneNumber, date} = props.totalApp

    const [selectedOption, setSelectedOption] = useState(null);
    console.log(selectedOption)

    // grantedAppointment={grantedAppointment} setGrantedAppointment={setGrantedAppointment}
 
       

        
        if (selectedOption !== null) {
            // const appointmentState = selectedOption[0]
            console.log(props.grantedAppointment)
            const changedAppointment = {...props.totalApp, value:selectedOption.value}
            // console.log(changedAppointment)
            // const previouseAppointment = {...props.grantedAppointment}
            console.log({...props.grantedAppointment})
            const insertedAppointment = {...props.grantedAppointment, ...changedAppointment}
            console.log(insertedAppointment)
            props.setGrantedAppointment({...insertedAppointment})
            setSelectedOption(null)
        }



    // console.log(props.totalAppointment)
    return (
        <tr  className="pt-3">
            <td><b>{props.totalAppointment.findIndex(x=> x._id === _id)}</b></td>
            <td><b>{date}</b></td>
            <td><b>{name}</b></td>
            <td><b>{PhoneNumber}</b></td>
            <td><button className="btn btn-primary basic__button">View</button></td>
            <td>

            <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />

                {/* <select onChange={() =>console.log(name,_id)} style={{textAlign:"center"}} name="action" id="patient__action">
                        <option className="bg-info" value="pending">Pending</option>
                        <option className="bg-success" value='approved'>Approved </option>
                        <option className="bg-danger" value="cancel">Cancel</option>
                </select> */}
            </td>
        </tr>    
    );
};

export default PatientsDash;