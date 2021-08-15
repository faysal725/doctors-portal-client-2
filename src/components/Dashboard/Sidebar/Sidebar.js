import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCog, faFileAlt, faPeopleArrows, faSignOutAlt, faTh, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




const Sidebar = () => {
    return (
        <div style={{color:"white", paddingTop:"100px", height: "100%"}}>
            <div>
                <div className='sidebar__items'>
                    <h5> <FontAwesomeIcon icon={faTh} /> Dashboard</h5>
                    <h5> <FontAwesomeIcon icon={faCalendar} /> Appointments</h5>
                    <h5> <FontAwesomeIcon icon={faUsers} /> <Link style={{color:"white", textDecoration:"none"}} to="/dashboard/patients">Patients</Link> </h5>
                    <h5> <FontAwesomeIcon icon={faFileAlt} /> <Link style={{color:"white", textDecoration:"none"}} to="/dashboard/prescription">Prescription</Link></h5>
                    <h5> <FontAwesomeIcon icon={faCog} /> Setting</h5>
                </div>
            </div>
            <div style={{paddingTop: "400px"}}>
                <div className="sidebar__logout">
                    <h4 style={{textAlign:"center"}}><FontAwesomeIcon icon={faSignOutAlt} /> Log out</h4>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;