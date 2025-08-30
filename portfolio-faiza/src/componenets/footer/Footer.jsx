import React from 'react'
import './footer.css'

const Footer =()=>{
    return(
        <footer className='flex'>
            <ul className='flex'>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>

            <p>@ 2025_Faiza_brainerXProject</p>
        </footer>
    );
}

export default Footer