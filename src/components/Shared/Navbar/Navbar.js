import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Dental Services</a>
        </li>


        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="#"><Link style={{color:"white", textDecoration:"none"}} to="/dashboard/dashboardAll">Dashboard</Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="#">Blogs</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="#">Contact Us</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;