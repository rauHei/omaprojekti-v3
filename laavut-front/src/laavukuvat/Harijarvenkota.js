import React from "react";
import { useNavigate } from "react-router-dom";

import grilli from '../Img/harijarvenlaavu/grilli.jpg'
import sisalta from '../Img/harijarvenlaavu/kotasisalta.jpg'
import puuvaja2 from '../Img/harijarvenlaavu/puuvaja2.jpg'
import ranta from '../Img/harijarvenlaavu/ranta.jpg'
import puut from '../Img/harijarvenlaavu/puut.jpg'
import penkki from '../Img/harijarvenlaavu/ruokailuryhma.jpg'
import './laavukuvat.css'

const Harijarvenkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Harijärven kodasta</h1>
            </div>

            <div className="row" >

                <div className="column" id="lisakuvat">
                    <div id="koe">
                        <img src={grilli} alt="harijarvenlaavu" width="600" height="400" />
                        {/* <div id="imgtext">HARI</div> */}
                    </div>
                    <img src={sisalta} alt="harijarvenlaavu" width="600" height="400" />

                    <img src={puuvaja2} alt="harijarvenlaavu" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">
                    <img src={ranta} alt="harijarvenlaavu" width="600" height="400" />

                    <img src={puut} alt="harijarvenlaavu" width="600" height="400" />

                    <img src={penkki} alt="harijarvenlaavu" width="600" height="400" />
                </div>

            </div>

            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Harijarvenkota;