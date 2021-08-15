import React, { useContext } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import loginImage from '../../images/loginImage.png'
import { useState } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const [login, setLogin] = useState(false)

    const [loggedInUser,  setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()



    let { from } = location.state || { from: { pathname: "/" } };


    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:''
    })



    console.log(loggedInUser)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{

        console.log(data)
        const name = data.name
        const email = data.Email
        const password = data.password
        console.log(name, email, password)
        
        if (name !== undefined ) {
            registereUser(name, email, password)
            
        }
        else{
            logginUser(email, password)
        }
    }


        const registereUser =( name, email, password) =>{
            
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in 
        const email = userCredential.user.email;
        const Username = name;

        setUser({
            isSignedIn:true,
            name: Username,
            email: email
        })
        setLoggedInUser({
            isSignedIn:true,
            name: Username,
            email: email
        })
        history.replace(from);
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..

        console.log(errorMessage)
        });
        
        }

        
        const logginUser = (email, password) =>{

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
            // Signed in
            const email = userCredential.user.email;
            console.log("login done", email)
            setUser({
                isSignedIn:true,
                email: email
            })

            setLoggedInUser({
                isSignedIn:true,
                email: email
            })
            history.replace(from);


            
            // ...
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            });
        }




    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    return (
        <div className="container">
            <div className="align-items-end d-flex row login__full">
            <div className="col-md-6 col-sm-12 ">
                
                    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>

                        {
                            login ?  
                            <>
                                <h1 style={{color:"#1CC7C1"}} className="text-center text-secondary">Register</h1>
                                <br />
                                <small>Your Name</small>
                                <br />
                                <input  {...register("name", {required: true})} />
                                <br />
                                {errors.name &&  <span className="text-danger">This field is required</span>}
                                <br />
                                <small>Your Email</small>
                                <br />
                                <input  type="text" {...register("Email", {required: true})} />
                                <br />
                                {errors.Email &&  <span className="text-danger">This field is required</span>}
                                <br />
                                <small>Password</small>
                                <br />
                                <input {...register("password", {required: true})} />
                                <br />
                                {errors.password &&  <span className="text-danger">This field is required</span>}
                                <br />

                                <input className="border-light btn-brand text-white" type="submit" value="Register" />
                                <br />
                                <small onClick={() => setLogin(!login)}>Not a new user? Please Login</small>
                            </> : <>
                                <h1 style={{color:"#1CC7C1"}} className="text-center  text-secondary">Login</h1>
                                <br />
                                <small>Your Email</small>
                                <br />
                                <input  type="text" {...register("Email", {required: true})} />
                                <br />
                                {errors.Email &&  <span className="text-danger">This field is required</span>}
                                <br />
                                <small>Password</small>
                                <br />
                                <input {...register("password", {required: true})} />
                                <br />
                                {errors.password &&  <span className="text-danger">This field is required</span>}
                                <br />

                                <input className="border-light btn-brand text-white" type="submit" value="Sign In" />
                                <br />
                                <small onClick={() => setLogin(!login)}>new user? Please register</small>
                            </>
                        }
                        <br />
                    </form>
                    
            </div>
            <div className="login__image col-md-6 col-sm-12">
                <img style={{height:"700px", width:"100%"}} className="img-fluid" src={loginImage} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Login;