import React from "react";
import { useNavigate } from "react-router-dom";

import grilli from '../Img/surmilamminlaavu/grilli.jpg'
import laavukuva from '../Img/surmilamminlaavu/laavukuva2.jpg'
import pitkospuut from '../Img/surmilamminlaavu/pitkospuut.jpg'
import sisältä from '../Img/surmilamminlaavu/sisalta.jpg'
import puuwc from '../Img/surmilamminlaavu/puuwc.jpg'
import rinne from '../Img/surmilamminlaavu/rinneylos.jpg'
import edesta from '../Img/surmilamminlaavu/edesta.jpg'
import puita from '../Img/surmilamminlaavu/puita.jpg'
import './laavukuvat.css'

const Surmilamminlaavu = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Surmilamminlaavu -laavulta</h1>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={laavukuva} alt="Surmilamminlaavu" width="600" height="400" />

                    <img src={rinne} alt="Surmilamminlaavu" width="450" height="600" id="Atupapuuwc" />

                    <img src={grilli} alt="Surmilamminlaavu" width="600" height="450" id="ATupapuuvaja" />

                    <img src={puita} alt="Surmilamminlaavu" width="600" height="450" id="ATupapuuvaja" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={sisältä} alt="Surmilamminlaavu" width="600" height="400" id="grilVäl" />

                    <img src={puuwc} alt="Surmilamminlaavu" width="450" height="600" id="kelopuu" />

                    <img src={pitkospuut} alt="Surmilamminlaavu" width="600" height="450" />

                    <img src={edesta} alt="Surmilamminlaavu" width="600" height="450" id="ATupapuuvaja" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Surmilamminlaavu;