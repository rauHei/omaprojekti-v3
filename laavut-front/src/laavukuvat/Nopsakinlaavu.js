import React from "react";
import { useNavigate } from "react-router-dom";

import grilli from '../Img/nopsakinlaavu/grilli2.jpg'
import laavukuva from '../Img/nopsakinlaavu/laavujapuut2.jpg'
import roskis from '../Img/nopsakinlaavu/roskis.jpg'
import mäki from '../Img/nopsakinlaavu/maki2.jpg'
import eteen from '../Img/nopsakinlaavu/nakymaeteen.jpg'
import puut from '../Img/nopsakinlaavu/puukasa.jpg'
import './laavukuvat.css'

const Nopsakinlaavu = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Nopsakinlaavu -laavulta</h1>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={laavukuva} alt="Nopsakinlaavu" width="600" height="400" />

                    <img src={grilli} alt="Nopsakinlaavu" width="600" height="400" id="Atupapuuwc" />

                    <img src={roskis} alt="Nopsakinlaavu" width="450" height="600" id="ATupapuuvaja" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={eteen} alt="Nopsakinlaavu" width="600" height="400" id="grilVäl" />

                    <img src={puut} alt="Nopsakinlaavu" width="600" height="400" id="kelopuu" />

                    <img src={mäki} alt="Nopsakinlaavu" width="450" height="600" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Nopsakinlaavu;