import React, { useState } from "react";

import {
    MapContainer,
    TileLayer,
    Marker, Popup
} from 'react-leaflet'
// import { icon as leafletIcon, popup } from "leaflet";
import harijärvenkota from '../Img/harijarvenlaavu/laavukuva.jpg';
import hariranta from '../Img/harijarvenlaavu/ranta.jpg';
import vaaralammenkota from '../Img/vaaralammenkota/laavukuva4.jpg';
import vaaralampi2 from '../Img/vaaralammenkota/maisema2.jpg';
import pieniheinalampilaavu from '../Img/pienenheinalammenlaavu/sivukuva.jpg';
import pieniheinalampi2 from '../Img/pienenheinalammenlaavu/ihanamaisema2.jpg';
import surmilamminlaavu from '../Img/surmilamminlaavu/laavukuva2.jpg';
import surmilampi2 from '../Img/surmilamminlaavu/pitkospuut.jpg';
import parnakota1 from '../Img/parnankodat/kotakuva.jpg';
import parnakota2 from '../Img/parnankodat/kodathyva.jpg';
import härkinvaara from '../Img/harkinvaaranlaavu/laavukuva.jpg';
import härkinvaara2 from '../Img/harkinvaaranlaavu/sisa2.jpg';
import vaivionkota from '../Img/vaivionkota/vaivionkota.jpg';
import vaivionkota2 from '../Img/vaivionkota/ranta2.jpg';
import antintupa from '../Img/antintupa/laavukuva2.jpg';
import antintupa2 from '../Img/antintupa/lahipolku2.jpg';
import ukonkota from '../Img/ukonkota/kotakuva2.jpg';
import ukonkota2 from '../Img/ukonkota/kotasisalta2.jpg';
import nopsakki from '../Img/nopsakinlaavu/laavujapuut.jpg';
import nopsakki2 from '../Img/nopsakinlaavu/nakymaeteen.jpg';
import kuvaAlas from '../Img/puukuva.jpg';
import oinaanvaara from '../Img/oinaanvaarankota/kotasivulta.jpg';
import oinaanvaara2 from '../Img/oinaanvaarankota/maisema4.jpg';
import Ilmonkota1 from '../Img/ilmonkota/kotaedesta.jpg';
import Ilmonkota2 from '../Img/ilmonkota/puuvaja2.jpg';
import maisema from '../Img/harijarvenlaavu/maisema.jpg';
import Parkingrilli from '../Img/parkingrilli/edesta.jpg';
import Parkingrilli2 from '../Img/parkingrilli/ranta.jpg';
import Huttulammenkota1 from '../Img/huttulammenkota/edesta3.jpg';
import Huttulammenkota2 from '../Img/huttulammenkota/laituri.jpg';
import Viinijarv1 from '../Img/viinijarvenkota/edesta2.jpg';
import Viinijarv2 from '../Img/viinijarvenkota/polkukodalle.jpg';
import Sompalammenlaavu from "../Img/sompalammenlaavu/edesta2.jpg";
import Sompalammenlaavu2 from "../Img/sompalammenlaavu/ranta.jpg";
import Heinalampi1 from '../Img/heinalammenlaavu/edesta2.jpg';
import Heinalampi2 from '../Img/heinalammenlaavu/takaa.jpg';
import Kylakota1 from '../Img/kylakota/edesta.jpg';
import Kylakota2 from '../Img/kylakota/luonnonsuojelualue.jpg';



import Reittitaulut from '../Img/parnankodat/reittitaulut.jpg'
import '../containers/Map.css';


const position = [62.61336789180278, 29.54249329523816];

const text = "Harijärven kota on Pataniemessä, Jyrinkylän lähellä. Kota on kinttupolun varrella ja sen edessä ranta, jossa voi uida. Kodalta löytyy puuwc, puuvaja sekä ruokailuryhmä.";
const text2 = "Sompalammen laavu sijaitsee Matkalammen rannalla, Matkalammentien tuntumassa. Paikalta löytyy puuvaja, puuwc:t sekä uimaranta. Sompalammen laavu on matkalampitarilin varrella."
const text3 = "Vaaralammen kota sijaitsee lähellä Myllypuron tietä. Kinttupolun varrella sijaitseva kota on kauniilla paikalla lammen vieressä, kodalta löytyy puuvaja, puuwc sekä ruokailuryhmä."
const text4 = "Pienen Heinälammen laavu sijaitsee noin kilometrin päässä Pärnävaaran urheilukeskukselta. Laavu on kauniilla paikalla Pienen Heinälammen vieressä rinteellä."
const text5 = "Surmilammin laavulta on Polvijärventielle noin 1,3 km matka. Laavu sijiatsee suon vieressä, suota ihailemaan pääsee pitkospuita pitkin. Laavulta löytyy puuwc sekä polttopuita."
const text6 = "Pärnävaaran kodat Urheilutie 5A, 80400 Ylämylly. Parkkipaikan vieressä iso kota, jossa hyvä paistaa makkarat vaikkapa hiihdon tai pyörälenkin jälkeen. Vieressä lukittu kota, joka varauksella käytössä. Vierestä löytyy myös puuwc sekä puuvaja. Sekä opastetaulut, joista selviää Pärnävaaran bikeTrail reitit, vaellusreitit sekä latureitit."
const text7 = "Huttulammenkota sijaitsee Käsämässä Vaivion kurssikeskuksen läheisyydessä lammen rannalla.Lampea kiertää kuntolenkki, jonka varrelta löytyy Qr koodein varustettuja kylttejä. Kodan saa käyttöön soittamalla Jaakko Hirvoselle p.040 719 1615. Hyvinvarustellulta kodalta löytyy puuvaja, grillipaikka, ruokailuryhmä, grillausvälineitä, sekä puuwc. Alueen vieressä on myös laituri josta pääsee uimaan. Ja uimahalli Liprakka sijaitsee myös ihan lähellä."
const text8 = "Luontopolun laavuksikin kutsuttu Härkinvaaran laavu, sijaitsee Vaivion kurssikeskuksen tuntumassa, lähellä Pataniementietä. Se on Härkinvaaran Luotopolun varrella metsän siimeksessä."
const text9 = "Vaivion kota on käytössä vain varauksella. Kodan lisäksi paikalta löytyy mm.uimaranta, uimakopit, puuwc, puuvarasto. Kota on hyvin varusteltu, siellä on sähköt ja jopa jääkaappi."
const text10 = "Antin tupa -niminen laavu sijaitsee noin 240 metrin päässä Häyrynlahdentieltä, luontopolun varrella. Sopii liikuntaesteisille, sillä paikalle pääsee myös autolla. Laavun luota löytyvä puuwc, puuvaja sekä ruokailuryhmä."
const text11 = "Päivilänvaaran päällä sijaitsee Ukonkota. Ympärivuotisessa käytössä olevalta kodalta avautuvat näkymät naapurikuntiin saakka, etenkin talvella kun puut eivät estä näkyvyyttä. Tilavalta kodalta löytyvät puuvaja sekä puuwc. Kodan läheltä löytyy myös pala sotahistoriaa, vanhan tykkiaseman jalka. Alempana noin 1,5 kilometrin päästä löytyy lisäksi pienempi Ilmon kota."
const text12 = "Nopsakin laavu sijaitsee Liperissä Nopsakin lenkin varrella. Pieni laavu on mäen päällä ja vierestä löytyy polttopuita."
const text13 = "Kaatamon Kyläkota sijaitsee osoittessa Kaatamontie 9 c. Kodan varauksia hoitaa Sinikka Nykänen, p. 045 278 4182. Kodalta löytyy sähköt, grilli, puuwc, puuvaja sekä luonnonalueena toimiva urheilukenttä."
const text14 = "Viinijärven kota. Viinijärven kirkon tuntumassa olevaa kota on lukittu ja sitä voi vuokrata seurakunnan oman käytön ulkopuolella Liperin seurakunnan kirkkoherranvirastolta, p. 0400 167 400. Vuokran hintaan sisältyvät polttopuut."
const text15 = "Oinaanvaaran kota. Niinikkosaaren eteläpäässä sijaitseva kota on kaikille avoin. Viitoitus kodalle alkaa Salonenäntieltä. Kota on hyvin varusteltu ja sijaitse vaaran päällä josta avautuvat hyvät maisemat. Kodalta löytyy puuvaja sekä puuwc. Alue on rauhoitettu."
const text16 = "Ilmonkota sijaitsee Päivilänvaaran alapuolella, 1,5km päässä Ukonkodasta. Pieni kota metsätien varrella."
const text17 = "Heinälammen laavu sijaitsee Pärnävaaralla Heinälammen rannalla. Heinälampi trailin varrella sijaitselva laavu on kauniilla paikalla ja sieltä löytyy kaikki tarvittava, puuwc,grillipaikka, puuvaja ja Kotos yöpymispaikka. Laavu ja Kotos on kaikkien vapaassa käytössä."
const text18 = "Parkin grilli sijaitsee Pärnävaaralla.Kesällä Parkin grillin löytää Jyri trailin ja Pärnä trailin varrelta Bike parkin alapäästä. Talvella taukopaikalle ajetaan uusi yhteys Jyrin lenkin ladulta ja Heinälampi winter traililtä."




const laavuData = [
    { name: "Harijärven kota", image: harijärvenkota, image2: hariranta, text: text, geoJson: { lat: 62.629944, lng: 29.528583 } },
    { name: "Sompalammen laavu", image: Sompalammenlaavu, image2: Sompalammenlaavu2, text: text2, geoJson: { lat: 62.618278, lng: 29.525056 } },
    { name: "Vaaralammen kota", image: vaaralammenkota, image2: vaaralampi2, text: text3, geoJson: { lat: 62.633806, lng: 29.452139 } },
    { name: "Pienen Heinälammenlaavu", image: pieniheinalampilaavu, image2: pieniheinalampi2, text: text4, geoJson: { lat: 62.650639, lng: 29.538917 } },
    { name: "Surmilammin laavu", image: surmilamminlaavu, image2: surmilampi2, text: text5, geoJson: { lat: 62.661111, lng: 29.559806 } },
    { name: "Pärnävaaran kodat", image: parnakota1, image2: parnakota2, text: text6, geoJson: { lat: 62.642556, lng: 29.550083 } },
    { name: "Huttulammen kota", image: Huttulammenkota1, image2: Huttulammenkota2, text: text7, geoJson: { lat: 62.637667, lng: 29.381278 } },
    { name: "Härkinvaaran laavu", image: härkinvaara, image2: härkinvaara2, text: text8, geoJson: { lat: 62.681222, lng: 29.547472 } },
    { name: "Vaivion kota", image: vaivionkota, image2: vaivionkota2, text: text9, geoJson: { lat: 62.67190783548492, lng: 29.494830077911384 } },
    { name: "Antin tupa-laavu", image: antintupa, image2: antintupa2, text: text10, geoJson: { lat: 62.584306, lng: 29.473472 } },
    { name: "Ukonkota", image: ukonkota, image2: ukonkota2, text: text11, geoJson: { lat: 62.48659628356752, lng: 29.4816294368206 } },
    { name: "Nopsakin laavu", image: nopsakki, image2: nopsakki2, text: text12, geoJson: { lat: 62.524778, lng: 29.408167 } },
    { name: "Kaatamon Kyläkota ", image: Kylakota1, image2: Kylakota2, text: text13, geoJson: { lat: 62.555633427608974, lng: 29.155435306746828 } },
    { name: "Viinijärven kota", image: Viinijarv1, image2: Viinijarv2, text: text14, geoJson: { lat: 62.648056, lng: 29.234194 } },
    { name: "Oinaanvaaran kota", image: oinaanvaara, image2: oinaanvaara2, text: text15, geoJson: { lat: 62.429722, lng: 29.449556 } },
    { name: "Ilmonkota", image: Ilmonkota1, image2: Ilmonkota2, text: text16, geoJson: { lat: 62.49328862371611, lng: 29.490938188437458 } },
    { name: "Heinälammenlaavu", image: Heinalampi1, image2: Heinalampi2, text: text17, geoJson: { lat: 62.6551010, lng: 29.537521 } },
    { name: "Parkin grilli", image: Parkingrilli, image2: Parkingrilli2, text: text18, geoJson: { lat: 62.6432, lng: 29.5363 } },


];

//karttasivu
function Kartta(props) {
    const [laavudata, setLaavuData] = useState(laavuData)

    console.log('laavudata:', laavudata);


    return (

        <div className="container-fluid" id="kokosivu">

            <div className="container" >

                <div id="otsikko2">
                    <h1 >Liperin kunnan alueen laavut ja kodat kartalla</h1>

                </div>

                <div className="container" id="row">


                    <div className="col" id="otsikko">
                        <h4>Karttaan on merkattu vaellusreitit keltaisella.</h4>
                        <p>Keltaisella merkitty kinttupolku (Kintt) reitistökokonaisuus (65 km) muodostuu seitsemästä rengasreitistä. Reitit soveltuvat lumettoman ajan maastopyöräilyyn, kävelyyn ja polkujuoksuun. Merkityt reitit ovat kaksisuuntaisia ja suurimmaksi osaksi luonnontilaisia polkuja.
                            <br></br>  Ks. alempaa linkit polkujen omiin karttakokonaisuuksiin.
                        </p>
                    </div>

                    <div className="col" id="yläkuva">
                        <img src={maisema} alt="maisemakuva lammesta ja puista jonka takana laavu" id="maisemakuva" />
                    </div>

                </div>

            </div>

            <div className="container" id="Kartta" >
                <MapContainer center={position} zoom={11} setView={true} scrollWheelZoom={false} id="map2">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png"
                    />

                    {laavuData.map((location) => (
                        <Marker
                            key={JSON.stringify(location.geoJson)}
                            position={[location.geoJson.lat, location.geoJson.lng]}
                            name={location.name}
                        >

                            <Popup>
                                <h5>{location.name}</h5>

                                <p>{location.text}</p>
                                <img src={location.image} alt="harijärven kota" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>

                            <Popup>
                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <br />
                                <img src={location.image} alt="harijärven kota" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>

                            <Popup>
                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />

                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />

                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="Harikuva" />
                                <img src={location.image2} alt="" id="HariKuva" />

                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />

                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />

                            </Popup>
                            <Popup>
                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />

                            </Popup>
                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>

                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>

                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>

                            <Popup>

                                <h5>{location.name}</h5>
                                <p>{location.text}</p>
                                <img src={location.image} alt="" id="HariKuva" />
                                <img src={location.image2} alt="" id="HariKuva" />
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            <div className="container-fluid" id="karttasivu">


                <div className="row" id="alaosa">

                    <div className="listanimet">

                        <div className="col-sm-4" id="alue2">
                            <h3 id="lista2">Kartalta löytyvät seuraavat laavut ja kodat</h3>
                            <ul id="lista" className="row">
                                {laavuData.map((names) => (
                                    <li key={names.name} id="listaL"><img className="kuvalistalla" src={names.image} alt="harijärvenkota" />{names.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="kuvaosa">
                        <img src={kuvaAlas} alt="ranta" className="img-fluid" />
                    </div>

                </div>


                <div className="row" id="alaosa2">

                    <div className="kuvaosa2">
                        <img src={Reittitaulut} alt="reittitaulut" className="img-fluid2" />
                    </div>

                    <div className="container-fluid" id="listalinkit">
                        <h3>Muita karttoja ja linkkejä:</h3>

                        <ul>
                            <p id="ot">Karttoja</p>
                            <li>  <a href="https://www.liperi.fi/documents/90255/572857/Kinttupolut+A4+tulostettava+kartta.pdf/1c78f59f-0a21-b2af-0694-915c3f5dbf7a" rel="noreferrer" target="_blank"> Kinttupolut</a></li>
                            <li>  <a href="https://www.liperi.fi/documents/90255/572857/P%C3%A4rn%C3%A4+Bike+Park+A4+tulostettava+kartta.pdf/40e859cc-3f96-0f8d-940c-b678baf217f7" rel="noreferrer" target="_blank"> Pärnä Bike Park</a></li>
                            <li>  <a href="https://www.liperi.fi/documents/90255/572857/Talvipolut+kartta.pdf/59c7aae9-0a5d-216e-3c07-f05188d2b0e9" rel="noreferrer" target="_blank"> Talvipolut</a></li>
                            <li>  <a href="https://www.liperi.fi/documents/90255/572857/Joensuun+seudun+polut%2C+A3-kartta.pdf/671ddb8f-6068-2e2a-a8f5-da87d7e0850b" rel="noreferrer" target="_blank"> Joensuun seudun polut/Joensuu Trails</a></li>
                            <br></br>

                            <p id="ot">Kyläyhdistyksiä</p>
                            <li>  <a href="https://vaivio.weebly.com/" rel="noreferrer" target="_blank"> Vaivion kyläyhdistys</a></li>
                            <li>  <a href="https://www.facebook.com/Kaatamon-seudun-sivut-190357264310151/" rel="noreferrer" target="_blank"> Kaatamon kyläyhdistys Facebook sivut</a></li>
                            <li>  <a href="https://fi-fi.facebook.com/liperinsalo/" rel="noreferrer" target="_blank"> Liperinsalon kyläyhdistys Facebook sivut</a></li>
                        </ul>
                    </div>



                </div>
            </div>
        </div>
    )
}


export default Kartta;