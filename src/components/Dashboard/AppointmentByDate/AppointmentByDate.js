import React from 'react';
import './AppointmentByDate.css'

const AppointmentByDate = ({appointments,selectedDate}) => {
    // console.log(appointments)
    const {Email, name, date} = appointments
    console.log(selectedDate)


    function fullDate(selectedDate) {
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const name = new Date(selectedDate)
        const monthNumber = name.getMonth()
        const daysNumber = name.getDate()
        const yearNumber= name.getFullYear()
        const thisMonth = monthNames[monthNumber]
        return  daysNumber + " "+ thisMonth +","+ yearNumber
    }


    return (
        <div style={{paddingTop:"140px"}}>
            <div className="d-flex row">
                <div style={{color:"#1CC7C1"}} className="col">
                    <h5>Appointments</h5>
                    </div>
                <div  className="col text-secondary">
                    <h5>{fullDate(selectedDate)}</h5>
                </div>
            </div>
            <div>
                <br /><br /><br />
                
            <table style={{width:"100%"}}>
                <tr>
                    <th className="text-secondary">NAME</th>
                    <th   className="text-secondary">SCHEDULE</th>
                    <th  className="text-secondary">ACTION</th>
                </tr>
                <br />
                
                 {
                    appointments.map(app => <tr key={app._id}>
                        <td className="pt-3"><b>{app.name}</b></td>
                        <td><b>7.00 PM</b></td>
                        <td>
                                <select name="action" id="action__id">
                                    <option value="not visited">Not Visited</option>
                                    <option value="visited">visited</option>
                                </select>
                        </td>
                    </tr>
                    )
                } 
                </table> 
            </div>
            
        </div>
    );
};

export default AppointmentByDate;