import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './DashboardAll.css'
import PatientsDash from './PatientsDash/PatientsDash';


const containerStyle = {
    backgorundColor: "#F4FDFB", 
    height:"100%"
}

const DashboardAll = () => {
    const [totalAppointment, setTotalAppointment]   = useState([])

    const [grantedAppointment, setGrantedAppointment] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/patients')
        .then(res => res.json())
        .then(data => setTotalAppointment(data))
    }, [])

    console.log(grantedAppointment)


    // console.log(totalAppointment)    

    
    return (
        <section className="pb-2">

        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 dashboard__sidebar sticky-top">
                <Sidebar></Sidebar>
            </div>
            
            <div className="ps-5 col-md-9">
                <div className="appointment__details">
                    <h4><b>Dashboard</b></h4>
                    <br /><br />
                    <div style={{paddingBottom:"100px"}} className="d-flex row">
                        <div className='col-md-3'>
                            <div style={{backgroundColor:"#F1536E", height:"120px"}} className="d-flex row  dashboard__update">
                                <div style={{textAlign:"center", fontSize:"x-large"}} className="col">
                                    <h1><b>{totalAppointment.length}</b></h1>
                                </div>
                                <div className="col"><h5>Pending Appointments</h5></div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div style={{backgroundColor:"#3DA5F4", height:"120px"}} className="d-flex row  dashboard__update">
                            <div style={{textAlign:"center"}} className="col">
                                <h1><b>{totalAppointment.length}</b></h1>
                            </div>
                                <div className="col"><h5>Today's Appointment</h5></div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div style={{backgroundColor:"#00C689", height:"120px"}} className="d-flex row   dashboard__update">
                                    <div style={{textAlign:"center"}} className="col">
                                    <h1><b>{totalAppointment.length}</b></h1>
                                    </div>
                                    <div className="col"><h5>Total Appointment</h5></div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div style={{backgroundColor:"#FDA006", height:"120px"}} className="d-flex row dashboard__update">
                                <div style={{textAlign:"center"}} className="col">
                                    <h1><b>{totalAppointment.length}</b></h1>
                                </div>
                                <div className="col"><h5>Total Patients</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex row">
                        <div className="col-md-6">
                            <h5 style={{color:"#1CC7C1"}}><b>All Patients</b></h5>
                        </div>
                        <div className="col-md-6 justify-content-end d-flex">
                                <select style={{textAlign:"center"}} name="action" id="action__id">
                                        <option value="week"> Week</option>
                                        <option value='faCalendarAlt'> &#xf073; Month </option>
                                        <option value="year">Year</option>
                                </select>
                        </div>
                    </div>
                    <div>
                        <br /><br />
                        <table style={{width:"100%", overflowX:"auto"}} className="patient__table">
                            <tr>
                            <th className="text-secondary">SL NO.</th>
                            <th className="text-secondary">Date</th>
                            <th className="text-secondary">Name</th>
                            <th className="text-secondary">Contact</th>
                            <th className="text-secondary">Prescription</th>
                            <th className="text-secondary">Action</th>
                            </tr>
                        <br />
                       

                            {
                                totalAppointment.map(totalApp => <PatientsDash key={totalApp._id} totalApp={totalApp} totalAppointment={totalAppointment}  grantedAppointment={grantedAppointment} setGrantedAppointment={setGrantedAppointment}></PatientsDash>)
                            }

                        
                        </table> 
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};

export default DashboardAll;