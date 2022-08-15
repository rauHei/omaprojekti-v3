import React from "react";
import { useNavigate } from "react-router-dom";

import maisema from '../Img/pienenheinalammenlaavu/ihanamaisema.jpg'
import polku from '../Img/pienenheinalammenlaavu/polku.jpg'
import roskis from '../Img/pienenheinalammenlaavu/roskis.jpg'
import sisäO from '../Img/pienenheinalammenlaavu/sisaoikea.jpg'
import sisä from '../Img/pienenheinalammenlaavu/sisavasen.jpg'
import puut from '../Img/pienenheinalammenlaavu/puut.jpg'
import lampi from '../Img/pienenheinalammenlaavu/pieniheinalampi.jpg'
import sivu from '../Img/pienenheinalammenlaavu/sivulta.jpg'
import './laavukuvat.css'

const Pienenheinalammenlaavu = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Pienen Heinälammen -laavulta</h1>
                <h4>Kauniilla paikalla, Kinttupolun varrella sijaitsevalta laavulta voi ihailla pientä Heinälampea.</h4>
                <p>Laavulle on opastus kyltit lähempänä laavua.</p>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={maisema} alt="PienenHeinäLammenLaavu" width="600" height="400" />

                    <img src={polku} alt="PienenHeinäLammenLaavu" width="450" height="600" />

                    <img src={sisä} alt="PienenHeinäLammenLaavu" width="600" height="400" />

                    <img src={lampi} alt="PienenHeinäLammenLaavu" width="450" height="600" />


                </div>

                <div className="column" id="lisakuvat">

                    <img src={puut} alt="PienenHeinäLammenLaavu" width="600" height="400" />


                    <img src={roskis} alt="PienenHeinäLammenLaavu" width="450" height="600" />


                    <img src={sisäO} alt="PienenHeinäLammenLaavu" width="600" height="400" />

                    <img src={sivu} alt="PienenHeinäLammenLaavu" width="450" height="600" />

                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Pienenheinalammenlaavu;