import React from "react";
import { useNavigate } from "react-router-dom";

import grilli from '../Img/vaivionkota/grilli.jpg'
import laituri from '../Img/vaivionkota/laituri.jpg'
import uimakoppi from '../Img/vaivionkota/uimakopit.jpg'
import puuwc from '../Img/vaivionkota/puuwc.jpg'
import piha from '../Img/vaivionkota/piha1.jpg'
import ranta from '../Img/vaivionkota/ranta.jpg'
import puuvaja from '../Img/vaivionkota/puuvaja.jpg'
import sivulta from '../Img/vaivionkota/sivulta.jpg'
import './laavukuvat.css'

const Vaivionkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Vaivion kodalta ja sen ympäriltä</h1>
                <h4>Vaivion kyläyhdistyksen ylläpitämä Vaivion kota on käytössä vain varauksella.</h4>
                <h4>Kodan varaukset: Päivi Rönkkö, p. 050 3656288</h4>
                <p>Kodan vieressä on hiekkaranta laiturineen, uimakopit ja tilavat ruokailuun ulkoilupenkit, alueelta löytyy myös puuwc.<br></br> Kodalla järjestetäänkin paljon tapahtumia kyläyhdistyksen toimesta.</p>
                <p>Hyvin varustetulla kodalla on sähköt, jääkaappi sekä grillausvälineitä.</p>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={ranta} alt="Vaivionkota" width="600" height="400" />

                    <img src={grilli} alt="Vaivionkota" width="450" height="600" />

                    <img src={puuwc} alt="Vaivionkota" width="450" height="600" />

                    <img src={sivulta} alt="Vaivionkota" width="600" height="400" />


                </div>

                <div className="column" id="lisakuvat">

                    <img src={uimakoppi} alt="Vaivionkota" width="600" height="400" />


                    <img src={laituri} alt="Vaivionkota" width="450" height="600" />


                    <img src={piha} alt="Vaivionkota" width="450" height="600" />

                    <img src={puuvaja} alt="Vaivionkota" width="600" height="400" />

                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Vaivionkota;