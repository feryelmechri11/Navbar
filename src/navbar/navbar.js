import React from 'react';
import './navbar.css'
import  Logo from './logosimp.png'

function Navbar() {
  return (
    <div className="navbar">
     
     <img class="logo_simplon" src={
       Logo 
     } alt="logo simplon"/>
     <ul>
     <li><a href="#">Contact </a></li>
     <li><a href="#">Equipe </a></li>
     <li><a href="#">Services </a></li>
     <li><a href="#">About us  </a></li>
    <li><a href="#">Home </a></li>
    </ul>
    </div>
  );
}

export default Navbar;