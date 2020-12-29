import React, { useState, useEffect } from 'react';
import './style.css';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';
import { FaHtml5, FaCss3, FaNodeJs, FaBootstrap, FaJava, FaLaravel, FaGithub, FaReact } from "react-icons/fa";
import { FaGithubAlt} from "react-icons/fa";


import Pageheader from '../../Componentes/Pageheader';




export default function Inicio() {
    const [project, setProject] = useState([]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://api.github.com/users/rodrigo12663/repos')
            .then(response => {
                setProject(response.data);
            });
            setLoading(false);
    }, [])
    if(loading){
        return <h1>Carregando</h1>
    }
    
    console.log(project);
    return (

        <div>
            <Pageheader />
            <div id="fundoP" className="py-5">
                <div className="text-center" id="foto">
                    <img id="perfilT" className="img-fluid wow fadeInUp" src="https://avatars1.githubusercontent.com/u/62311509?v=4" alt="t"></img>
                </div>
                <div className="" id="container-apre">

                    <div id="textButton">
                        <div id="textPrin" className="text-center" >
                                <p className="text-center" id="text-apre">Rodrigo Vieira Nunes</p>

                                <div id="divSub2">
                                    <p id="text-dsv">Desenvolvedor Web Front-end e Backend</p>
                                    <Link to="#ContainerHabilidades">
                                        <button id="btnSobre" type="button" className="btn btn">Habilidades</button>
                                    </Link>
                                    <Link to="#Github">
                                        <button id="btnContact" type="button" className="btn btn">Github</button>
                                    </Link>
                                </div>
                               
                        </div>
                        
                       
                    </div>
                </div>
            </div>
            <div id="ContainerHabilidades" >
                <div className="container">
                    <h3 id="txtTituloD" className="text-center py-2">Habilidades<hr className="text-center" /></h3>
                    <div className="card-deck">
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaHtml5 id="icone" />
                            </div>
                            
                        </div>
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaCss3 id="icone" />
                            </div>
                            
                        </div>
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaBootstrap id="icone" />
                            </div>
                            
                        </div>
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaJava id="icone" />
                            </div>
                            
                        </div>

                    </div>
                    <div id="Habi2" className="card-deck py-5">
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaNodeJs id="icone" />
                            </div>

                            
                        </div>
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaLaravel id="icone" />
                            </div>
                            
                        </div>
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaGithub id="icone" />
                            </div>
                            <div className="card-body">
                                <p id="txtcardT" className="card-text">html é uma linguagem de hipertexto</p>
                            </div>
                        </div>
                        <div id="fundoC" className="card">
                            <div className="d-flex justify-content-center">
                                <FaReact id="icone" />
                            </div>
                            <div className="card-body">
                                <p id="txtcardT" className="card-text">html é uma linguagem de hipertexto</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="Github">
                <div className="container">
                     <h3 id="txtTituloD" className="text-center">GITHUB<hr className="text-center" /></h3>
         
                </div>
            
                <div class="d-flex justify-content-center">
                </div>
                     <div class="row px-5">
                     {project.map(project=>(
                                    <div className="col-sm-6 py-2 ">
                                        <div className="card ">
                                        <div className="card-body ">
                                            <ul className="list-group list-group-horizontal">
                                                 <li > <FaGithubAlt id="iconeG"/></li>
                                                 <li className="px-2"><p> {project.name}</p></li>
                                            </ul>
                                        
                                           
                                            <p className="card-text">{project.description}</p>
                                            <a id="btnProjetos" href={"https://github.com/rodrigo12663/"+project.name} className="btn btn-primary">Visualizar reporsitório</a>
                                        </div>
                                        </div>
                                        
                                    </div>   
                        ))}   
                    </div> 

                </div>

                        
                               
                      
            




               
        </div>
      



    );
}
