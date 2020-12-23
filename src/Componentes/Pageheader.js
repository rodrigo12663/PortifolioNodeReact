import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../assets/imagens/logo3.png';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

import './styleC.css';
export default function Pageheader(prop){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark static-top ">
        <div className="container">
            <Link  className="navbar-brand" to="/">
                <img  id="logo" src={logoImg} alt=""></img>
            </Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link id="btnProj" className="btn btn" to="/sobre">Projetos</Link >
                            </li>
                           
                            
                            
                        </ul>
             </div>
            </div>
        </nav>
                 
    );
}
