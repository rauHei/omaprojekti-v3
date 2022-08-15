import React from "react";
import { useNavigate } from "react-router-dom";

import grilli from '../Img/parnankodat/grilli.jpg'
import kodat from '../Img/parnankodat/kodat2.jpg'
import kota from '../Img/parnankodat/kotapysty.jpg'
import käymälä from '../Img/parnankodat/kaymala.jpg'
import ruokailuryhmä from '../Img/parnankodat/ruokailuryhmaparempi.jpg'
import puut from '../Img/parnankodat/puut.jpg'

import './laavukuvat.css'

const Parnankodat = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Pärnän kahdesta vierekkäisestä kodasta</h1>
                <h6>Toinen on lukittu ja toinen kaikkien vapaassa käytössä</h6>
                <h4>Lukitun kodan varaukset: <a href="mailto:varaukset@edu.liperi.fi">varaukset @edu.liperi.fi</a></h4>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={kodat} alt="PärnänKodat" width="600" height="400" />

                    <img src={kota} alt="PärnänKodat" width="450" height="600" />

                    <img src={grilli} alt="PärnänKodat" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={puut} alt="PärnänKodat" width="600" height="400" />


                    <img src={käymälä} alt="PärnänKodat" width="450" height="600" />


                    <img src={ruokailuryhmä} alt="PärnänKodat" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Parnankodat;