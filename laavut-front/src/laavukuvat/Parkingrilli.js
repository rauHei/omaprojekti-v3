import React from "react";
import { useNavigate } from "react-router-dom";

import sivulta from '../Img/parkingrilli/sivulta.jpg'
import grilli from '../Img/parkingrilli/grilli2.jpg'
import puuvaja from '../Img/parkingrilli/puuvaja.jpg'
import puuWc from '../Img/parkingrilli/vessat2.jpg'
import sisältä from '../Img/parkingrilli/sisalta.jpg'
import ranta from '../Img/parkingrilli/rantapysty.jpg'
import ruokailuryhma from '../Img/parkingrilli/ruokailuryhma.jpg'
import kyltti from '../Img/parkingrilli/kyltti.jpg'
import './laavukuvat.css'

const ParkinGrilli = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Parkin Grilli -taukopaikalta</h1>
                <br></br>
                <p>Joulukuussa 2021 valmistunut Parkin Grilli on pärnävaaran uusin taukopaikka. <br></br> Se sijaitsee Pärnä Bike trailin varrella ja sen vieressä kuultaa Jyrin järvi.<br></br>
                    Taukopaikka on tilava ja sinne mahtuu kerralla isompikin porukka. Lähelle pääsee myös autolla, <br></br> jonka jälkeen on vain kivuttava mäki alas ja olet perillä. Paikalta löytyvät siisiti vessat, puuvaja sekä runsaasti pöytätilaa missä syödä eväitä.
                </p>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={sivulta} alt="ParkinGrilli" width="600" height="400" />

                    <img src={ranta} alt="ParkinGrilli" width="450" height="600" />

                    <img src={puuWc} alt="ParkinGrilli" width="600" height="400" />

                    <img src={ruokailuryhma} alt="ParkinGrilli" width="600" height="400" />


                </div>

                <div className="column" id="lisakuvat">

                    <img src={sisältä} alt="ParkinGrilli" width="600" height="400" />

                    <img src={grilli} alt="ParkinGrilli" width="450" height="600" />

                    <img src={puuvaja} alt="ParkinGrilli" width="600" height="400" />

                    <img src={kyltti} alt="ParkinGrilli" width="600" height="400" />

                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default ParkinGrilli;