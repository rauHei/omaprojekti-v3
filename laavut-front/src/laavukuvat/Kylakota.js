import React from "react";
import { useNavigate } from "react-router-dom";

import sivulta from '../Img/kylakota/sivulta.jpg'
import puuwc from '../Img/kylakota/puuwc.jpg'
import puuvaja from '../Img/kylakota/puuvaja.jpg'
import sisältä from '../Img/kylakota/sisa1.jpg'
import grilli from '../Img/kylakota/grilli.jpg'
import uuni from '../Img/kylakota/uuni.jpg'
import luonnons from '../Img/kylakota/luonnons.jpg'
import kyltti from '../Img/kylakota/kyltti.jpg'
import './laavukuvat.css'

const Kyläkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Kyläkodalta</h1>
                <br></br>
                <h4>Tilava kota sijaitsee Kaatamolla, urheilukentän vieressä joka on luonnonsuojelualue. </h4>
                <h4>Kota on Kaatamon seudun kyläyhdistyksen rakentama ja ylläpitämä, jonka ansiosta kodalla järjestetään vuoden mittaan erilaisia tapahtumia.</h4>
                <h4>Kodan varauksia hoitaa Sinikka Nykänen, p. 045 278 4182.</h4>
                <p>Kota on siisti ja tilava ja siellä on myös sähköt. Kodalta löytyy, puuwc, puuvaja, sähköuuni, grilli, grillausvälineitä sekä alueesta kertovia esitteitä.</p>
                <p>Kodan vieressä on suuri luonnonsuojelualueena toimiva urheilukenttä, jolta voi käydä ihailemassa ketokasveja sekä hyönteisharvinaisuuksia. <br></br>
                    Vuodesta 2008 luonnonsuojelualuuena toimiva kenttä on yksi Pohjois-Karjalan arvokkaimmista hyönteispaikoista.</p>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={sivulta} alt="Kylakota" width="600" height="400" />

                    <img src={uuni} alt="Kylakota" width="450" height="600" />

                    <img src={puuvaja} alt="Kylakota" width="600" height="400" />

                    <img src={luonnons} alt="Kylakota" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={sisältä} alt="Kylakota" width="600" height="400" />


                    <img src={grilli} alt="Kylakota" width="450" height="600" />


                    <img src={puuwc} alt="Kylakota" width="600" height="400" />

                    <img src={kyltti} alt="Kylakota" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Kyläkota;