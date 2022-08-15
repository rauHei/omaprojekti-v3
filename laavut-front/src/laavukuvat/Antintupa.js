import React from "react";
import { useNavigate } from "react-router-dom";

import kyltti from '../Img/antintupa/antitupakyltti.jpg'
import laavukuva from '../Img/antintupa/laavukuva.jpg'
import puuvaja from '../Img/antintupa/puuvaja.jpg'
import puuWc from '../Img/antintupa/puuwculkoa.jpg'
import kelopuu from '../Img/antintupa/kelopuu.jpg'
import välineet from '../Img/antintupa/grillausvalineita.jpg'
import './laavukuvat.css'

const Antintupa = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Antintupa -laavulta</h1>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={kyltti} alt="Antintupa" width="600" height="400" />

                    <img src={puuvaja} alt="Antintupa" width="450" height="600" id="ATupapuuvaja" />

                    <img src={kelopuu} alt="Antintupa" width="450" height="600" id="kelopuu" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={välineet} alt="Antintupa" width="600" height="400" id="grilVäl" />

                    <img src={puuWc} alt="Antintupa" width="450" height="600" id="Atupapuuwc" />

                    <img src={laavukuva} alt="Antintupa" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Antintupa;