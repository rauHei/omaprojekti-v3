

import './Home.css';
import Alaavukuva from '../Img/antintupa/laavukuva2.jpg';
import Hlaavukuva from '../Img/harijarvenlaavu/vajajalaavu.jpg';
import Nlaavukuva from '../Img/nopsakinlaavu/laavukuva.jpg';
import phlaavu from '../Img/pienenheinalammenlaavu/laavukuva.jpg';
import Slaavu from '../Img/surmilamminlaavu/laavukuva.jpg';
import Vkota from '../Img/vaivionkota/vaivionkota.jpg';
import Vlaavu from '../Img/harkinvaaranlaavu/laavukuva3.jpg';
import IlmonK from '../Img/ilmonkota/kotaedesta.jpg';
import UkonK from '../Img/ukonkota/kotakuvahyva.jpg';
import OinaanvK from '../Img/oinaanvaarankota/kotakuva.jpg';
import parnaK from '../Img/parnankodat/kotakuva.jpg';
import VaaraLK from '../Img/vaaralammenkota/laavukuva2.jpg';
import ParkinGrilli from '../Img/parkingrilli/edesta2.jpg';
import HeinalammenLaavu from '../Img/heinalammenlaavu/edesta2.jpg';
import Huttulammenkota from '../Img/huttulammenkota/edesta3.jpg';
import Sompalammenlaavu from '../Img/sompalammenlaavu/edesta2.jpg';
import Viinijärvenkota from '../Img/viinijarvenkota/kotahyva.jpg';
import Kylakota from '../Img/kylakota/edesta.jpg';


//Homepage/Kotisivu jossa karuselli

const Home = () => {

    return (
        <div className="container" id="etusivu">

            <div className="yläosa">
                <h1 className="homeheadings">Liperin kunnan alueen kodat ja laavut</h1>

                <p>Laavut ovat kaikille avoimia. Jotkut kodat ovat lukittuja, ja voit tiedustella varauksia kodan yhteystiedoista. Yhteystiedot löytyvät lisäkuvien yhteydestä.</p>

                <p>Liperin kunnan alueella sijaitsee paljon ihania retkeilypaikkoja, ja mikäpä olisikaan mukavampaa, kuin pistäytyä paistamassa makkaraa laavulla tai kodalla. Tämän sivun tarkoituksena on tutustuttaa sinut Liperin kunnan alueen laavu- ja kotatarjontaan. Alueella on paljon ihania ja sympaattisia laavuja ja kotia. Suurin osa on kaikkien vapaassa käytössä, joidenkin kotien käyttöön tarvitset avaimen ja/tai varauksen. Tämä sivusto perehdyttää sinut tarkemmin asiaan.</p>

                <p id="welcome">Tervetuloa!</p>



                <p>Sivulle voi kirjautua, jolloin sivustosta saa vielä enemmän irti. Kirjautuneena pystyt kommentoimaan laavuja, sekä lukemaan muiden kommentteja ja kokemuksia.</p>

                <p>Muistathan, että kodat ja laavut pysyvät kaikille viihtyisinä, kun kuljetat omat roskasi roskikseen.</p>
            </div>


            <div >
                <div id="laavutSlides" className="carousel slide" data-bs-ride="carousel" data-interval="6000">

                    <ol className="carousel-indicators">
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="4"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="5"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="6"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="7"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="8"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="9"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="10"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="11"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="12"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="13"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="14"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="15"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="16"></button>
                        <button type="button" data-bs-target="#laavutSlides" data-bs-slide-to="17"></button>



                    </ol>

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img className="d-block w-100" src={Nlaavukuva} alt="Nupukinlaavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Nopsakinlaavu</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Alaavukuva} alt="Antintupa-laavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Antintupa-laavu</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Hlaavukuva} alt="Harijärven kota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Harijärven kota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={phlaavu} alt="Pienen Heinälammen laavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Pienen Heinälammen laavu</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Vkota} alt="Vaivion kota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Vaivion kota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Vlaavu} alt="Vaivion laavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Härkinvaaran laavu</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Slaavu} alt="Surmilammin laavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Surmilammin laavu</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={IlmonK} alt="Ilmonkota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ilmonkota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={UkonK} alt="Ukonkota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ukonkota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={OinaanvK} alt="Oinaanvaarankota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Oinaanvaarankota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={parnaK} alt="PärnänKota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>PärnänKota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={VaaraLK} alt="Vaaralammenkota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Vaaralammenkota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={ParkinGrilli} alt="Parkin Grilli" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Parkin Grilli</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={HeinalammenLaavu} alt="Heinälammenlaavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Heinälammenlaavu</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Huttulammenkota} alt="Huttulammenkota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Huttulammenkota</h5>
                                <p>...</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src={Sompalammenlaavu} alt="Sompalammenlaavu" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Sompalammenlaavu</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Viinijärvenkota} alt="Viinijarvenkota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Viinijärvenkota</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Kylakota} alt="Kyläkota" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Kyläkota</h5>
                                <p>...</p>
                            </div>
                        </div>



                        <button className="carousel-control-prev" type="button" data-bs-target="#laavutSlides" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#laavutSlides" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home