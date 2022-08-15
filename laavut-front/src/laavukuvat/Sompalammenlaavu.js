import React from "react";
import { useNavigate } from "react-router-dom";

import edestä from '../Img/sompalammenlaavu/laavuedesta.jpg'
import puuwc from '../Img/sompalammenlaavu/puuwct.jpg'
import puuvaja from '../Img/sompalammenlaavu/puuvaja2.jpg'
import ranta from '../Img/sompalammenlaavu/ranta.jpg'
import ruokailuryhmä from '../Img/sompalammenlaavu/ruokailuryhma.jpg'
import kyltti from '../Img/sompalammenlaavu/kyltti.jpg'
import './laavukuvat.css'

const Sompalammenlaavu = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Sompalammen laavulta</h1>
                <br></br>
                <h4>Sompalammen laavu sijaitsee Ylämyllyllä Matkalammen rannalla </h4>
                <p> Laavun luona on uimaranta, puuvaja sekä puuWC:t. <br></br>
                    Kodan vierestä löytyy tilava parkkialue. Kauniilla paikalla oleva laavu sopii täten myös liikuntaesteisille. </p>


            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={edestä} alt="Sompalammenlaavu" width="600" height="400" />

                    <img src={puuwc} alt="Sompalammenlaavu" width="600" height="400" />

                    <img src={kyltti} alt="Sompalammenlaavu" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={ranta} alt="Sompalammenlaavu" width="600" height="400" />


                    <img src={ruokailuryhmä} alt="Sompalammenlaavu" width="600" height="400" />


                    <img src={puuvaja} alt="Sompalammenlaavu" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Sompalammenlaavu;