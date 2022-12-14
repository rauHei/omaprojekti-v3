import React from "react";
import "./Footer.css";
import kelo from '../Img/kelo2.png'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";


//footerin sivu jossa ikoneita ja linkkejä
const Footer = () => {
    return (
        <div className="container-fluid" id="kokoSivu">
            <footer className="container-fluid" id="footer">
                <div className="row" id="kelot">

                    <div className="col" id="kel">
                        <img src={kelo} alt="kelopuu" id="kelo" />
                        <a href="https://www.liperi.fi/retkeilyreitit" rel="noreferrer" target="_blank"><FaHouseUser id="logo" />  Liperin kunnan sivut</a>
                    </div>
                    <div className="col" id="kel">
                        <img src={kelo} alt="kelopuu" id="kelo" />
                        <a href="https://fi-fi.facebook.com/liperinkunta" rel="noreferrer" target="_blank"><FaFacebook id="logo" />  Liperin facebook sivut </a>
                    </div>
                    <div className="col" id="kel">
                        <img src={kelo} alt="kelopuu" id="kelo" />
                        <a href="https://www.instagram.com/liperinkunta/?hl=fi" rel="noreferrer" target="_blank"><FaInstagram id="logo" />  Liperin Instagram</a>
                    </div>

                    <div className="col" id="kel">
                        <img src={kelo} alt="kelopuu" id="kelo" />
                        <a href="https://twitter.com/liperinkunta" rel="noreferrer" target="_blank"><FaTwitter id="logo" /> Liperin twitter</a>
                    </div>

                </div>



            </footer>
        </div>
    )
}
export default Footer