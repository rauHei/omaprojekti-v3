import React from "react";
import { useNavigate } from "react-router-dom";

import edestä from '../Img/oinaanvaarankota/kotaedesta.jpg'
import maisema from '../Img/oinaanvaarankota/maisema.jpg'
import grilli from '../Img/oinaanvaarankota/grilli.jpg'
import puuvaja from '../Img/oinaanvaarankota/puuvajajawc.jpg'
import paistinp from '../Img/oinaanvaarankota/paistinpannutjagrillitikut.jpg'
import puut from '../Img/oinaanvaarankota/puut.jpg'
import './laavukuvat.css'

const OinaanvaaranKota = () => {

    let history = useNavigate();

    const handleClick = () => {
        history("/laavut");
    }

    return (
        <div className="container-fluid" >

            <div className="kuvatLaavuistaOtsikko">
                <h1>Lisäkuvia Oinaanvaaran Kodalta</h1>
                <br></br>
                <h4>Oinaanvaaran kota sijaitsee Oinaanvaaran päällä kuvankauniilla paikalla.</h4>
                <h4>Sen on rakentanut Liperinsalon kylänyhdistys 2006.</h4>
                <h4>Oinaanvaaran alue on rauhoitettu 9.6.2011 alkaen.</h4>
                <p> Alueella voi edelleen liikkua, sienestää ja marjastaa.<br></br>
                    Kiellettyä on puiden (myös kaatuneiden) ottaminen, risujen, kääpien, sammaleen sekä jäkälän kerääminen,<br></br> metsästys sekä moottoriajoneuvolla ajaminen.
                    Jokaisen kävijän tulee tuoda omat polttopuut, mikäli niitä ei ole saatavilla puuvajassa.</p>
            </div>

            <div className="row">
                <div className="column" id="lisakuvat" >
                    <img src={edestä} alt="OinaanvaaranKota" width="600" height="400" />

                    <img src={puut} alt="OinaanvaaranKota" width="450" height="600" />

                    <img src={maisema} alt="OinaanvaaranKota" width="600" height="400" />

                </div>

                <div className="column" id="lisakuvat">

                    <img src={grilli} alt="OinaanvaaranKota" width="600" height="400" />


                    <img src={paistinp} alt="OinaanvaaranKota" width="450" height="600" />


                    <img src={puuvaja} alt="OinaanvaaranKota" width="600" height="400" />
                </div>

            </div>
            <button className="laavukuvatButton" onClick={handleClick}>Takaisin laavut sivulle</button>
        </div>
    )
}
export default OinaanvaaranKota;