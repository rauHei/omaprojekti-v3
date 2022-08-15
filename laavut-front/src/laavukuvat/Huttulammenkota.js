import React from "react";
import { useNavigate } from "react-router-dom";

import kauempaa from '../Img/huttulammenkota/kaempaa.jpg'
import puuwc from '../Img/huttulammenkota/puuwc.jpg'
import puuvaja from '../Img/huttulammenkota/puuliiteri.jpg'
import sisältä from '../Img/huttulammenkota/sisaparas.jpg'
import grillipaikka from '../Img/huttulammenkota/grilpaikkaparas.jpg'
import maisema from '../Img/huttulammenkota/maisema.jpg'
import ruokailuryhma from '../Img/huttulammenkota/ruokailuryhma.jpg'
import savustus from '../Img/huttulammenkota/savustus.jpg'
import './laavukuvat.css'

const Huttulammenkota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Huttulammen kodalta</h1>
                <br></br>
                <h4>Kodan saa käyttöön varaamaamalla Jaakko Hirvoselta puh. 040 719 1615.</h4>
                <h4>Huttulammenkota(Kota latinki) sijaitsee Käsämässä vaivion kurssikeskuksen läheisyydessä Huttulammen rannalla. </h4>
                <h4>Vaiviontien läntiselle pisteelle pystytetty Kota Latinki on monipuolisesti varustettu.</h4>
                <p>Kodalta löytyy siisti puuwc, puuliiteri, savustuspönttö, retkialustoja sekä grillausvälineitä.</p>
                <p>Kodan läheisyydessä kiertää Huttulammen kiertävä Qr-koodi kyltein merkitty valaistu kaprakan kuntolenkki (Pahakala-trail).Lenkillä ei ole talvihuoltoa.</p>
                <p>Kodalle on hyvät kulkuyhteydet ja tämän vuoksi kota sopii hyvin myös liikuntaesteisille.</p>

            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={kauempaa} alt="Huttulammenkota" width="600" height="400" />

                    <img src={puuvaja} alt="Huttulammenkota" width="600" height="400" />

                    <img src={puuwc} alt="Huttulammenkota" width="450" height="600" />

                    <img src={ruokailuryhma} alt="Huttulammenkota" width="600" height="400" />


                </div>

                <div className="column" id="lisakuvat">

                    <img src={grillipaikka} alt="Huttulammenkota" width="600" height="400" />


                    <img src={sisältä} alt="Huttulammenkota" width="600" height="400" />


                    <img src={savustus} alt="Huttulammenkota" width="450" height="600" />

                    <img src={maisema} alt="Huttulammenkota" width="600" height="400" />

                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default Huttulammenkota;