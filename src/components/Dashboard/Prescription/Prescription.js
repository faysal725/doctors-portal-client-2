import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Prescription.css'




const containerStyle = {
    backgorundColor: "#F4FDFB", 
    height:"100%"
}



const Prescription = () => {


    const [prescription, setPrescription] = useState([])
    

    
    useEffect(() => {
        fetch('http://lit-shore-05628.herokuapp.com/patients')
        .then(res => res.json())
        .then(data => setPrescription(data))
    }, [])

    console.log(prescription)
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 sticky-top dashboard__sidebar">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="ps-5 col-md-9">
                    <div className="appointment__details">
                        <h4><b>Prescription</b></h4>
                        <br /><br />
                        <div className="d-flex row">
                            <div className="col-md-6">
                                <h5 style={{color:"#1CC7C1"}}><b>All prescription</b></h5>
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
                                <th  className="text-secondary">Date</th>
                                <th className="text-secondary">Name</th>
                                <th className="text-secondary">Contact</th>
                                <th className="text-secondary">Prescription</th>
                                </tr>
                            <br />
                                

                                    {
                                        prescription.map(pt =>
                                            <tr  className="pt-3">
                                                <td><b>{prescription.findIndex(x => x._id === pt._id)}</b></td>
                                                <td><b>{pt.date}</b></td>
                                                <td><b>{pt.name}</b></td>
                                                <td><b>{pt.PhoneNumber}</b></td>
                                                <td><button className="btn btn-primary basic__button">View</button></td>
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

export default Prescription;