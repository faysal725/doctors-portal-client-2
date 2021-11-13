import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCog, faFileAlt, faPeopleArrows, faSignOutAlt, faTh, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import firebaseConfig from '../../Login/firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";




const Sidebar = () => {

    let history = useHistory();
    
    const signout = () =>{
        firebase.auth().signOut().then(() => {
            console.log("sign out successfull")
            history.push("/")
            window.location.reload();
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <div style={{color:"white", paddingTop:"100px", height: "100%"}}>
            <div>
                <div className='sidebar__items'>
                    <h5> <FontAwesomeIcon icon={faTh} /> Dashboard</h5>
                    <h5> <FontAwesomeIcon icon={faCalendar} /> <Link style={{color:"white", textDecoration:"none"}} to="/dashboard/appointment">Appointments</Link></h5>
                    <h5> <FontAwesomeIcon icon={faUsers} /> <Link style={{color:"white", textDecoration:"none"}} to="/dashboard/patients">Patients</Link> </h5>
                    <h5> <FontAwesomeIcon icon={faFileAlt} /> <Link style={{color:"white", textDecoration:"none"}} to="/dashboard/prescription">Prescription</Link></h5>
                    <h5> <FontAwesomeIcon icon={faUser} /> <Link style={{color:"white", textDecoration:"none"}} to="/dashboard/addDoctor">Add Doctor</Link></h5>
                    <h5> <FontAwesomeIcon icon={faCog} /> Setting</h5>
                </div>
            </div>
            <div style={{paddingTop: "400px"}}>
                <div className="sidebar__logout">
                    <h4 onClick={() => signout()} style={{textAlign:"center"}}><FontAwesomeIcon icon={faSignOutAlt} /> Log out</h4>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;