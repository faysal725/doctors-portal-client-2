import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddDoctor.css'

import { useForm } from "react-hook-form";
import axios from 'axios';



const containerStyle = {
    backgorundColor: "#F4FDFB", 
    height:"100%"
}


const AddDoctor = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    const handleFileChange =(e) =>{
        const newFile = e.target.files[0]
        setFile(newFile)
        console.log(newFile.name)
    }
    

    // const handleSubmit = (e)=> {
    //     const formData = new FormData()
    //     console.log(info)
    //     formData.append('file', file);
    //     formData.append('name', info.name);
    //     formData.append('email', info.email);
        
      
    //     fetch('http://lit-shore-05628.herokuapp.com/addADoctor', {
    //       method: 'POST',
    //       body: formData
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data, "done")
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })

    //     e.preventDefault()}         //when the handleSubmit will triggered e.preventDefault() function prevent browser from refreshing


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
      let name = data.name
      let email = data.email 
      let image = data.image[0]
      
      console.log(name, email, image);
      uploadInfo(name, email, image)
     
    //  window.location.reload()
        
        
  };

  function uploadInfo(name, email, file) {
    const formData = new FormData()
    
  formData.append('file', file)
  formData.append('name', name)
  formData.append('email', email)

    axios.post(`http://lit-shore-05628.herokuapp.com/addADoctor`, formData)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })


}
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 sticky-top dashboard__sidebar">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="ps-5 col-md-9 p-4">
                    
                        
                <h5 className="text-brand"><b>Add A Doctor</b></h5>
                       
                    {/* <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email"/>
                    </div>
                    <br />
                    <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name=" " placeholder="Name" />
                    </div>
                    <br />
                    <div className="form-group">
                    <label for="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control"  placeholder="picture" />
                    </div>
                   <br /><br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form> */}


                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <br />
                    {errors.Name && <span>This field is required</span>}
                    <br /><br />
                    <input type="email" className="form-control" {...register("email", { required: true})} placeholder="Enter email"/>
                    <br />
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <input type="name" className="form-control" {...register("name", { required: true})} placeholder="Enter name"/>
                    <br />
                    {errors.name && <span>This field is required</span>}
                    <br /><br />
                    <input type="file"  {...register("image", { required: true })} />
                    <br />
                    {errors.image && <span>This field is required</span>}
                    <br /><br />
                    
                    <input className="search_Submit" type="submit" value="UPLOAD" />
                    </form>
                    

                </div>
            </div>
        </section>
    );
};

export default AddDoctor;