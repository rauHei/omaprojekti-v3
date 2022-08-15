import React from "react";
import { useNavigate } from "react-router-dom";

import kauempaa from '../Img/viinijarvenkota/kotakaempaa.jpg'
import kyltti from '../Img/viinijarvenkota/kyltti.jpg'
import kirkko from '../Img/viinijarvenkota/kirkko.jpg'
import metsä from '../Img/viinijarvenkota/metsa.jpg'
import otokkahotelli from '../Img/viinijarvenkota/otokkahotelli.jpg'
import polku from '../Img/viinijarvenkota/polkukodalle.jpg'
import './laavukuvat.css'

const Viinijarvenkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Viinijarvenkodalta</h1>
                <h4>Viinijärven kirkon tuntumassa olevaa kota on lukittu ja sitä voi vuokrata seurakunnan oman käytön ulkopuolella Liperin seurakunnan kirkkoherranvirastolta, p. 0400 167 400. <br></br>
                    Vuokran hintaan sisältyvät polttopuut.</h4>
                <p>Kota sijaitsee Viinijärven keskustassa Viinijärven kirkon viereisellä metsäalueella.<br></br>
                    Paikka sopii liikuntaesteisille sillä sinne pääsee hyvää tietä pitkin.</p>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={kauempaa} alt="Viinijarvenkota" width="600" height="400" />

                    <img src={polku} alt="Viinijarvenkota" width="450" height="600" />

                    <img src={kirkko} alt="Viinijarvenkota" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={metsä} alt="Viinijarvenkota" width="600" height="400" />

                    <img src={otokkahotelli} alt="Viinijarvenkota" width="450" height="600" />

                    <img src={kyltti} alt="Viinijarvenkota" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Viinijarvenkota;