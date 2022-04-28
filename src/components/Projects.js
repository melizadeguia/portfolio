import React from 'react';
import Header from './Header';
import Realm from '../media/realm.PNG';
import LeadTech from '../media/leadtech.PNG';
import google from '../media/google.PNG';
import '../styles/Projects.scss';

const Projects = () => {
    return (
        <div className='projects'>
            <Header />
            <div id='content'>
                <div className="container">
                    <h1>Projects</h1>
                    <div className="row">
                        <div className="col-sm">
                            <div className='projcontent'>
                                <img src={Realm} alt="" />
                                <h3>Realm E-magazine</h3>
                                <p>A home and living e-magazine that focuses on different aspects of home design.</p>
                                <a href="https://melizadeguia.github.io/realm.html"><button>See More</button></a>

                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='projcontent'>
                                <img src={LeadTech} alt="" />
                                <h3>Lead Tech Outsourcing</h3>
                                <p>An Outsourcing company offering Web Development Services</p>
                                <a href="https://leadtech.netlify.app/?fbclid=IwAR2UMDoH9VamOdeUc4jTgVarTEbU1yrRycuZe-kwDgPb6yxE2DgyaM3qkcQ"><button>See More</button></a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='projcontent'>
                                <img src={google} alt="" />
                                <h3>Google Replica</h3>
                                <p>A replica of Google's search home page using CSS and display flex</p>
                                <a href="https://github.com/melizadeguia/google-replica"><button>See More</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects