import React from "react";
import '../containers/Laavupage.css';
import laavukuva from '../Img/harijarvenlaavu/laavukuva.jpg'
import Antintupa from '../Img/antintupa/laavukuva2.jpg'
import Nopsakinlaavu from '../Img/nopsakinlaavu/laavukuva.jpg'
import phlaavu from '../Img/pienenheinalammenlaavu/laavukuva.jpg';
import Parnankodat from '../Img/parnankodat/kotakuva.jpg'
import Surmilamminlaavu from '../Img/surmilamminlaavu/edesta.jpg'
import Vaaralammenkota from '../Img/vaaralammenkota/laavukuva4.jpg'
import Vaivionkota from '../Img/vaivionkota/vaivionkota.jpg'
import Härkinvaaranlaavu from '../Img/harkinvaaranlaavu/laavukuva3.jpg'
import Oinaanvaarankota from '../Img/oinaanvaarankota/kotaedesta.jpg'
import Ilmonkota from '../Img/ilmonkota/kotaedesta.jpg'
import Ukonkota from '../Img/ukonkota/kotakuvahyva.jpg'
import ParkinGrilli from '../Img/parkingrilli/edesta.jpg';
import Heinälammenlaavu from '../Img/heinalammenlaavu/edesta2.jpg';
import Viinijarvenkota from '../Img/viinijarvenkota/edesta2.jpg';
import Sompalammenlaavu from '../Img/sompalammenlaavu/edesta2.jpg';
import Huttulammenkota from '../Img/huttulammenkota/edesta3.jpg';
import Kyläkota from '../Img/kylakota/edesta.jpg';


//laavut sivu
const LaavutPage = () => {


    return (
        <div className="container-fluid" id="laavupage">

            <div className="yläosa">
                <h1>Liperin kunnan alueen kodat ja laavut</h1>
                <p>Tässä hiukan lisätietoa kustakin kodasta/laavusta, lisäkuvia löytyy linkkiä tai kuvaa klikkaamalla.</p>
            </div>


            <div className="clearfix">

                <div className="row">

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/HarijarvenKota'>
                                <img src={laavukuva} alt="harijärvenkota" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Harijärven kota</h3>
                                <p> Sijaitsee koulun läheisyydessä</p>
                                <ul className="Korttilista">
                                    <li>Puita</li>
                                    <li>Puuwc</li>
                                    <li>Sopii liikuntaesteisille</li>
                                    <li>Roskis</li>
                                    <li>Uimaranta</li>
                                    <li>Kinttupolun varrella</li>
                                </ul>
                                <a href="/Harijarvenkota" className="card-link">Lisää kuvia</a>
                            </div>
                        </div>
                    </div>


                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Antintupa'>
                                <img src={Antintupa} alt="Antintupa" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Antintupa -laavu</h3>
                                <p> Sijaitsee Höyrylahdentien lähellä</p>
                                <ul>
                                    <li>Puita</li>
                                    <li>Puuwc</li>
                                    <li>Sopii liikuntaesteisille</li>
                                    <li>Roskis</li>
                                    <li>Ruokailuryhmä</li>
                                    <li>Luontopolun varrella</li>
                                </ul>
                                <a href="/Antintupa" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>
                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Nopsakinlaavu'>
                                <img src={Nopsakinlaavu} alt="Nopsakinlaavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Nopsakin laavu</h3>
                                <p> Sijaitsee Tutjuntien läheisyydessä Liperissä</p>
                                <ul>
                                    <li>Puita</li>
                                    <li>FrispeeGolf radan varrella</li>
                                    <li>Roskis</li>
                                    <li>Mäen päältä näkymä pellolle</li>
                                    <li>Pieni ja soma</li>
                                </ul>
                                <a href="/Nopsakinlaavu" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>
                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Pienenheinalammenlaavu'>
                                <img src={phlaavu} alt="PienenHeinälammenLaavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Pienen Heinälammen laavu</h3>
                                <p>Pärnävaaralla lammen vieressä</p>
                                <ul>
                                    <li>Polttopuita</li>
                                    <li>Grilli</li>
                                    <li>Roskis</li>
                                    <li>Näkymä lammelle</li>
                                    <li>Kinttupolun varrella</li>
                                </ul>
                                <a href="/Pienenheinalammenlaavu" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Parnankodat'>
                                <img src={Parnankodat} alt="woodToilet" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Pärnän kodat</h3>
                                <p>Pärnävaaralla urheilukeskuksen yhteydessä kaksi kotaa vierekkäin</p>
                                <ul>
                                    <li>Polttopuita</li>
                                    <li>Puu WC</li>
                                    <li>Roskis</li>
                                    <li>Sopii Liikuntaesteisille</li>
                                    <li>Ruokailuryhmä</li>
                                </ul>
                                <a href="/Parnankodat" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Surmilamminlaavu'>
                                <img src={Surmilamminlaavu} alt="Surmilamminlaavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Surmilammin laavu</h3>
                                <p> Sijaitsee 1,3km päässä <br></br>Polvijärventieltä</p>
                                <ul>
                                    <li>Runsaasti polttopuita</li>
                                    <li>Puuwc</li>
                                    <li>Roskis</li>
                                    <li>Pitkospuut Suonläheisyyteen</li>
                                    <li>Kauniilla paikalla</li>
                                </ul>
                                <a href="/Surmilamminlaavu" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Vaaralammenkota'>
                                <img src={Vaaralammenkota} alt="woodToilet" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Vaaralammen kota</h3>
                                <p> Sijaitsee Myllypurontien lähellä</p>
                                <ul>
                                    <li>Puuvaja</li>
                                    <li>Puuwc</li>
                                    <li>Roskis</li>
                                    <li>Vaaralammen vieressä, laituri</li>
                                    <li>Ruokailuryhmä</li>
                                    <li>Kauniilla paikalla</li>
                                </ul>
                                <a href="/Vaaralammenkota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Vaivionkota'>
                                <img src={Vaivionkota} alt="Vaivionkota" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Vaivion kota</h3>
                                <p>Veteläsuontie 4, <br></br> Vain varaamalla käytössä</p>
                                <ul>
                                    <li>Puuvaja</li>
                                    <li>Puuwc</li>
                                    <li>Roskis</li>
                                    <li>Uimaranta vieressä</li>
                                    <li>Ruokailuryhmä</li>
                                </ul>
                                <a href="/Vaivionkota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Harkinvaaranlaavu'>
                                <img src={Härkinvaaranlaavu} alt="Härkinvaaranlaavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Härkinvaaran laavu</h3>
                                <p>Pienen luontopolun varrella</p>
                                <ul>
                                    <li>Vaivion kurssikeskuksen lähellä</li>
                                    <li>Puita</li>
                                    <li>Luontopolun varrella</li>
                                    <li>Grillipaikka</li>
                                    <li>Tilava</li>
                                </ul>
                                <a href="/Harkinvaaranlaavu" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Oinaanvaarankota'>
                                <img src={Oinaanvaarankota} alt="Oinaanvaarankota" width="600" height="400" />
                            </a>

                            <div className="desc">
                                <h3 className="card-header">Oinaanvaaran kota</h3>
                                <p>Ohjeistus Salonenäntieltä alkaen</p>
                                <ul>
                                    <li>Oinaanvaaran päällä</li>
                                    <li>Polttopuita</li>
                                    <li>Puuvaja Ja PuuWc</li>
                                    <li>Hyvinvarusteltu</li>
                                    <li>Tilava</li>
                                </ul>
                                <a href="/Oinaanvaarankota" className="card-link">Lisää kuvia</a>
                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Ilmonkota'>
                                <img src={Ilmonkota} alt="Ilmonkota" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Ilmon kota</h3>
                                <p>Sijaitsee Roukalahdessa metsän siimeksessä</p>
                                <ul>
                                    <li>Grillipaikka ulkona ja sisällä</li>
                                    <li>Puuvarasto ja polttopuita</li>
                                    <li>Lähellä Ukonkotaa</li>
                                    <li>Liikuntaesteisille</li>

                                </ul>
                                <a href="/Ilmonkota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Ukonkota'>
                                <img src={Ukonkota} alt="Ukonkota" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Ukon kota</h3>
                                <p>Päivilänvaaralla rinteen päällä</p>
                                <ul>
                                    <li>Tilava</li>
                                    <li>Polttopuita ja puuvarasto</li>
                                    <li>Puuwc</li>
                                    <li>Grillipaikka</li>
                                    <li>Näkymät kauas tietyiltä kohdin</li>
                                </ul>
                                <a href="/Ukonkota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="row">


                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Parkingrilli'>
                                <img src={ParkinGrilli} alt="ParkinGrilli" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Parkin grilli</h3>
                                <p>Pärnävaaralla Jyrinjärven rannalla</p>
                                <ul>
                                    <li>Tilava</li>
                                    <li>Polttopuita ja puuvarasto</li>
                                    <li>Puu WC:t</li>
                                    <li>Grillipaikka</li>
                                    <li>Bike Trailin varrella</li>
                                </ul>
                                <a href="/Parkingrilli" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Heinalammenlaavu'>
                                <img src={Heinälammenlaavu} alt="Heinälammen laavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Heinälammen laavu</h3>
                                <p>Pärnävaaralla Heinälammen rannalla</p>
                                <ul>
                                    <li>Kauniilla paikalla</li>
                                    <li>Polttopuita ja puuvarasto</li>
                                    <li>Puu WC</li>
                                    <li>Grillipaikka</li>
                                    <li>Kotos (yöpymismökki)</li>
                                </ul>
                                <a href="/Heinalammenlaavu" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Viinijarvenkota'>
                                <img src={Viinijarvenkota} alt="Heinälammen laavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Viinijärven kota</h3>
                                <p>Viinijärven kirkon viereisessä metsässä</p>
                                <ul>
                                    <li>Kirkon vieressä</li>
                                    <li>Sopii liikuntaesteisille</li>
                                    <li>wc kirkon tiloissa</li>
                                    <li>Grillipaikka</li>
                                </ul>
                                <a href="/Viinijarvenkota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Sompalammenlaavu'>
                                <img src={Sompalammenlaavu} alt="Sompalammenlaavu" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Sompalammen laavu</h3>
                                <p>Ylämyllyllä Matkalampi trailin varrella</p>
                                <ul>
                                    <li>Matkalammen vieressä</li>
                                    <li>Sopii liikuntaesteisille</li>
                                    <li>Uimaranta</li>
                                    <li>Grillipaikka</li>
                                    <li>Puuvaja</li>
                                    <li>Puu WC:t</li>
                                </ul>
                                <a href="/Sompalammenlaavu" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">


                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Huttulammenkota'>
                                <img src={Huttulammenkota} alt="Huttulammenkota" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Huttulammen kota</h3>
                                <p>Käsämässä Luovin kurssikeskuksen läheisyydessä</p>
                                <ul>
                                    <li>Huttulammen vieressä</li>
                                    <li>Sopii liikuntaesteisille</li>
                                    <li>Puuvaja</li>
                                    <li>Grillipaikka, savustuspönttö</li>
                                    <li>Laituri ja uimapaikka vieressä</li>
                                    <li>Puu WC</li>
                                </ul>
                                <a href="/Huttulammenkota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href='/Kylakota'>
                                <img src={Kyläkota} alt="Huttulammenkota" width="600" height="400" />
                            </a>
                            <div className="desc">
                                <h3 className="card-header">Kyläkota</h3>
                                <p>Kaatamolla luonnonsuojelualueen vieressä</p>
                                <ul>
                                    <li>Sähköt</li>
                                    <li>Sopii liikuntaesteisille</li>
                                    <li>Puuvaja</li>
                                    <li>Grilli ja sähköuuni</li>
                                    <li>Puu WC</li>
                                </ul>
                                <a href="/Kylakota" className="card-link">Lisää kuvia</a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default LaavutPage