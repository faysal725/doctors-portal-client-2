import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import './Dashboard.css'
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgorundColor: "#F4FDFB", 
    height:"100%"}


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments]  = useState([])
    
    const handleDateChange = date =>{
       
        const date1 = changeDateFormat(date)

        // console.log(typeof(date), date)
        // console.log(typeof(date1), date1)
        setSelectedDate(date1)

    }

    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({date1: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    function changeDateFormat(date) {
        const date3 =date
        const date2 = new Date(date3)
        date2.setDate(date2.getDate() + 1)
        const date1 = date2.toISOString().split('T')[0]
        return date1
    }

    
    function monthName(selectedDate) {
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const name = new Date(selectedDate)
        const monthNumber = name.getMonth()
        const thisMonth = monthNames[monthNumber]
        return  thisMonth
    }
        // console.log(appointments[0].name)

        
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 dashboard__sidebar">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="col-md-5">
                    <div className="appointment__details">
                        <h4><b>Appointment</b></h4>
                        <br /><br />
                        <div className="m-5">
                            <h2 style={{textAlign:"center"}} className="text-secondary">{monthName(selectedDate)}</h2>
                            <br /><br />
                            <Calendar className="calender" onChange={handleDateChange} value={new Date()}/>
                        </div>
                    </div>

                </div>

                <div className="col-md-4">
                    <AppointmentByDate appointments={appointments} selectedDate={selectedDate}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;