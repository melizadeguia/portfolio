import React from 'react'
import vidbackground from '../media/vidbackground.mp4';
import DeGuia_MelizaCV from '../media/DEGUIA_meliza.pdf'
import '../styles/Section.scss'

const Section = () => {
    return (
        <div>
            <div class="frontpage" id="front">

                <video src={vidbackground} 
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop class="video"></video>


                <div class="content">
                    <span class="title">Meliza De Guia</span>
                    <h1>Hello, I'm <span>Meliza</span></h1>
                    <p>I'm a Front-end Web Developer based in Manila, Philippines and i enjoy creating things that live on the internet. See my portfolio and feel free to say hi.</p>
                    <a href={DeGuia_MelizaCV} class="btn" download="DeGuia_MelizaCV">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Section