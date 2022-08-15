import React from "react";
import { useNavigate } from "react-router-dom";

import maisema from '../Img/heinalammenlaavu/maisema.jpg'
import sivu from '../Img/heinalammenlaavu/sivuhyva.jpg'
import kotus from '../Img/heinalammenlaavu/kotusjapuuvaja.jpg'
import takaa from '../Img/heinalammenlaavu/takaa.jpg'
import puuvaja from '../Img/heinalammenlaavu/puuvajah.jpg'
import grilli from '../Img/heinalammenlaavu/grilli.jpg'
import kotusSisa from '../Img/heinalammenlaavu/kotusoikee.jpg'
import grillipaikka from '../Img/heinalammenlaavu/grilipaikka.jpg'
import './laavukuvat.css'

const Heinalammenlaavu = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Heinälammen laavulta</h1>
                <h4>Kauniilla paikalla, Heinälammen varrella sijaitsevalta laavulta voi ihailla kaunista Heinälampea.</h4>
                <p>Laavulla on monipuolinen tarjonta, sieltä löytyy uusittu grilli, puuwc, puuvaja sekä tilava ja siisti Kotos-yöpymispaikka.<br></br>
                    Mikäli paikalta ei löydy roskista kuuluu vierailijan viedä omat roskat mukanaan.
                </p>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={grillipaikka} alt="Heinälammenlaavu" width="600" height="400" />

                    <img src={sivu} alt="Heinälammenlaavu" width="600" height="400" />

                    <img src={kotus} alt="Heinälammenlaavu" width="600" height="400" />

                    <img src={grilli} alt="Heinälammenlaavu" width="600" height="400" />


                </div>

                <div className="column" id="lisakuvat">

                    <img src={maisema} alt="Heinälammenlaavu" width="600" height="400" />


                    <img src={puuvaja} alt="Heinälammenlaavu" width="600" height="400" />


                    <img src={kotusSisa} alt="Heinälammenlaavu" width="600" height="400" />

                    <img src={takaa} alt="Heinälammenlaavu" width="600" height="400" />

                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Heinalammenlaavu;