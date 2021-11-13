import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Patients.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FaCalendar } from 'react-icons/fa';

const containerStyle = {
    backgorundColor: "#F4FDFB", 
    height:"100%"
}



const Patients = () => {

    const [patients, setPatients] = useState([])
    

    
    useEffect(() => {
        fetch('http://lit-shore-05628.herokuapp.com/patients')
        .then(res => res.json())
        .then(data => setPatients(data))
    }, [])

    
    // console.log(patients)

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 dashboard__sidebar">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="ps-5 col-md-9">
                    <div className="appointment__details">
                        <h4><b>Patients</b></h4>
                        <br /><br />
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
                            <table style={{width:"100%"}}>
                                <tr>
                                <th className="text-secondary">SL NO.</th>
                                <th className="text-secondary">Name</th>
                                <th  className="text-secondary">Gender</th>
                                <th className="text-secondary">Age</th>
                                <th className="text-secondary">Weight</th>
                                </tr>
                            <br />
                                

                                    {
                                        patients.map(pt =>
                                            <tr  className="pt-3">
                                                <td><b>{patients.findIndex(x => x._id === pt._id)}</b></td>
                                                <td><b>{pt.name}</b></td>
                                                <td><b>{pt.gender}</b></td>
                                                <td><b>{pt.age}</b></td>
                                                <td><b>{pt.weight}</b></td>
                                            </tr>    
                                        )
                                    }
                                
                            </table> 
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Patients;