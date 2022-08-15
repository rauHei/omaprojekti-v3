import React from "react";
import { useNavigate } from "react-router-dom";

import edestä from '../Img/harkinvaaranlaavu/edestalahelta.jpg'
import laavu from '../Img/harkinvaaranlaavu/pystylaavu.jpg'
import grilli from '../Img/harkinvaaranlaavu/grilli.jpg'
import sisä from '../Img/harkinvaaranlaavu/sisa2.jpg'
import laavu2 from '../Img/harkinvaaranlaavu/laavukuva2.jpg'
import puut from '../Img/harkinvaaranlaavu/puut.jpg'
import './laavukuvat.css'

const Harkinvaaranlaavu = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Härkinvaaran laavulta</h1>
                <h4>Härkinvaaran laavu sijaitsee pienen luontopolun varrella lähellä Vaivion kurssikeskusta.</h4>
                <h4>Siitä käytetään myös nimeä Luontopolun laavu.</h4>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={laavu2} alt="Härkinvaaranlaavu" width="600" height="400" />

                    <img src={grilli} alt="Härkinvaaranlaavu" width="450" height="600" />

                    <img src={edestä} alt="Härkinvaaranlaavu" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={puut} alt="Härkinvaaranlaavu" width="600" height="400" />


                    <img src={laavu} alt="Härkinvaaranlaavu" width="450" height="600" />


                    <img src={sisä} alt="Härkinvaaranlaavu" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Harkinvaaranlaavu;