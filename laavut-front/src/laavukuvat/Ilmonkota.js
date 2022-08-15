import React from "react";
import { useNavigate } from "react-router-dom";

import edestä from '../Img/ilmonkota/kotaedesta.jpg'
import kota from '../Img/ilmonkota/kotakuva.jpg'
import puuvaja from '../Img/ilmonkota/puuvaja.jpg'
import sisältä from '../Img/ilmonkota/sisalta.jpg'
import ulkogrilli from '../Img/ilmonkota/ulkogrilli.jpg'
import puut from '../Img/ilmonkota/puut.jpg'
import './laavukuvat.css'

const Ilmonkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Ilmon kodalta</h1>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={edestä} alt="Ilmonkota" width="600" height="400" />

                    <img src={kota} alt="Ilmonkota" width="600" height="400" />

                    <img src={ulkogrilli} alt="Ilmonkota" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={puut} alt="Ilmonkota" width="600" height="400" />


                    <img src={sisältä} alt="Ilmonkota" width="450" height="600" />


                    <img src={puuvaja} alt="Ilmonkota" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Ilmonkota;