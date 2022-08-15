import React from "react";
import { useNavigate } from "react-router-dom";

import edestä from '../Img/ukonkota/kotaedesta.jpg'
import puuwc from '../Img/ukonkota/puuwc.jpg'
import puuvaja from '../Img/ukonkota/puuvajahyva.jpg'
import sisältä from '../Img/ukonkota/kotasisalta.jpg'
import grilli from '../Img/ukonkota/grilli.jpg'
import grillitikut from '../Img/ukonkota/grillitikut.jpg'
import './laavukuvat.css'

const Ukonkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Ukon kodalta</h1>
                <br></br>
                <h4>Tilava kota sijaitsee Päivilänvaaran päällä, josta voi nähdä kauaskin etenkin talvisaikaan. </h4>
                <h4>Kodan läheltä löytyy myös pala sotahistoriaa, vanhan tykkiaseman jalka.</h4>
                <p>Alempana noin 1,5 kilometrin päästä löytyy lisäksi pienempi Ilmon kota.</p>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={edestä} alt="Ukonkota" width="600" height="400" />

                    <img src={puuwc} alt="Ukonkota" width="450" height="600" />

                    <img src={grillitikut} alt="Ukonkota" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={grilli} alt="Ukonkota" width="600" height="400" />


                    <img src={sisältä} alt="Ukonkota" width="450" height="600" />


                    <img src={puuvaja} alt="Ukonkota" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Ukonkota;