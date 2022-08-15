import React from "react";
import { useNavigate } from "react-router-dom";

import maisema from '../Img/vaaralammenkota/maisema2.jpg'
import laavukuva from '../Img/vaaralammenkota/laavukauempaa2kaunis.jpg'
import penkki from '../Img/vaaralammenkota/penkkikoristekuva.jpg'
import puuvaja from '../Img/vaaralammenkota/puuvaja2.jpg'
import puuwc from '../Img/vaaralammenkota/puuwc2.jpg'
import sisältä from '../Img/vaaralammenkota/sisaltatulentekopaikka.jpg'
import './laavukuvat.css'

const VaaralammenKota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Vaaralammen Kodalta</h1>
                <h4>Oikein satumaisella paikalla sijaitseva Vaaralammenkota tarjoaa kauniin lampi maiseman ja luonnon rauhan kävijälleen. </h4>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={laavukuva} alt="VaaralammenKota" width="600" height="400" />

                    <img src={puuvaja} alt="VaaralammenKota" width="450" height="600" id="Atupapuuwc" />

                    <img src={sisältä} alt="VaaralammenKota" width="600" height="450" id="ATupapuuvaja" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={maisema} alt="VaaralammenKota" width="600" height="400" id="grilVäl" />

                    <img src={puuwc} alt="VaaralammenKota" width="450" height="600" id="kelopuu" />

                    <img src={penkki} alt="VaaralammenKota" width="600" height="450" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default VaaralammenKota;