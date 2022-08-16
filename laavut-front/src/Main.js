import React, { useState, useEffect } from "react";

import {
    Route,
    NavLink,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import Home from "./containers/Home";
import loginService from '../src/services/Login'

import './Main.css';
import Kartta from "./containers/Map";
import FeedbackPage from "./containers/FeedbackPage";
import FeedbackForm from "./components/FeedbackForm";
import EditFeedbackForm from "./components/EditFeedbackForm";
import EditUserInfo from "./components/EditUserInfo";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import Footer from "./components/Footer";

import LaavutPage from "./containers/LaavutPage";
import ProfilePage from './containers/ProfilePage';
import Deleted from "./components/Deleted";
import EditUserPhoto from "./components/EditUserPhoto";

import Harijarvenkota from "./laavukuvat/Harijarvenkota";
import Antintupa from './laavukuvat/Antintupa'
import Nopsakinlaavu from "./laavukuvat/Nopsakinlaavu";
import Pienenheinalammenlaavu from "./laavukuvat/Pienenheinalammenlaavu";
import Parnankodat from "./laavukuvat/Parnankodat";
import Surmilamminlaavu from "./laavukuvat/Surmilamminlaavu";
import Vaaralammenkota from "./laavukuvat/Vaaralammenkota";
import Vaivionkota from "./laavukuvat/Vaivionkota";
import Harkinvaaranlaavu from "./laavukuvat/Harkinvaaranlaavu";
import Oinaanvaarankota from "./laavukuvat/Oinaanvaarankota";
import Ilmonkota from "./laavukuvat/Ilmonkota";
import Ukonkota from "./laavukuvat/Ukonkota";
import Parkingrilli from './laavukuvat/Parkingrilli';
import Heinalammenlaavu from "./laavukuvat/Heinalammenlaavu";
import Viinijarvenkota from "./laavukuvat/Viinijarvenkota";
import Sompalammenlaavu from "./laavukuvat/Sompalammenlaavu";
import Huttulammenkota from "./laavukuvat/Huttulammenkota";
import Kylakota from "./laavukuvat/Kylakota";



const Main = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)

        } else {
            setUser(null)
        }
    }, [])









    return (
        <div className="container-fluid" id="paaalue">

            <BrowserRouter>
                <div className="container-fluid"  >

                    <nav className="navbar navbar-expand-sm bg-light navbar-light">


                        <div className="container-fluid" id="navbarAlue">


                            {/* <div className="form-inline"> */}

                            {user === null ?

                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><NavLink to="/">Koti</NavLink></li>
                                    <li className="nav-item"><NavLink to="/laavut/">Laavut</NavLink></li>
                                    <li className="nav-item"><NavLink to="/Map/">Kartta</NavLink></li>
                                    <li className="nav-item"><NavLink to="/register/">Rekisteröidy</NavLink></li>
                                </ul>

                                :

                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><NavLink to="/">Koti</NavLink></li>
                                    <li className="nav-item"><NavLink to="/laavut/">Laavut</NavLink></li>
                                    <li className="nav-item"><NavLink to="/map/">Kartta</NavLink></li>
                                    <li className="nav-item"><NavLink to="/feedbackform/">Palautelomake</NavLink></li>
                                    <li className="nav-item"><NavLink to="/feedback">Kommentit</NavLink></li>
                                    <li className="nav-item"><NavLink to="/profile/">Omat Tiedot</NavLink></li>
                                </ul>

                            }
                            {/* </div> */}


                            <div className="d-flex">

                                <LoginForm />

                            </div>

                        </div>
                    </nav>

                    <div>
                        <Routes >
                            <Route path="/" exact element={<Home />} />
                            <Route path="/laavut" exact element={<LaavutPage />} />
                            <Route path="/map" exact element={<Kartta />} />
                            <Route path="/register" exact element={<Register />} />
                            <Route path="/feedback" exact element={<FeedbackPage />} />
                            <Route path="/feedbackform" exact element={<FeedbackForm />} />
                            <Route path="/login" exact element={<LoginForm />} />
                            <Route path="/profile" exact element={<ProfilePage />} />
                            <Route path="/editUserInfo" exact element={<EditUserInfo />} />
                            <Route path="/editFeedback" exact element={<EditFeedbackForm />} />
                            <Route path="/editUserphoto" exact element={<EditUserPhoto />} />
                            <Route path="/deleted" exact element={<Deleted />} />


                            <Route path="/Harijarvenkota" exact element={<Harijarvenkota />} />
                            <Route path="/Antintupa" exact element={<Antintupa />} />
                            <Route path="/Nopsakinlaavu" exact element={<Nopsakinlaavu />} />
                            <Route path="/Pienenheinalammenlaavu" exact element={<Pienenheinalammenlaavu />} />
                            <Route path="/Parnankodat" exact element={<Parnankodat />} />
                            <Route path="/Surmilamminlaavu" exact element={<Surmilamminlaavu />} />
                            <Route path="/Vaaralammenkota" exact element={<Vaaralammenkota />} />
                            <Route path="/Vaivionkota" exact element={<Vaivionkota />} />
                            <Route path="/Harkinvaaranlaavu" exact element={<Harkinvaaranlaavu />} />
                            <Route path="/Oinaanvaarankota" exact element={<Oinaanvaarankota />} />
                            <Route path="/Ilmonkota" exact element={<Ilmonkota />} />
                            <Route path="/Ukonkota" exact element={<Ukonkota />} />
                            <Route path="/Parkingrilli" exact element={<Parkingrilli />} />
                            <Route path="/Heinalammenlaavu" exact element={<Heinalammenlaavu />} />
                            <Route path="/Viinijarvenkota" exact element={<Viinijarvenkota />} />
                            <Route path="/Sompalammenlaavu" exact element={<Sompalammenlaavu />} />
                            <Route path="/Huttulammenkota" exact element={<Huttulammenkota />} />
                            <Route path="/Kylakota" exact element={<Kylakota />} />
                        </Routes>

                    </div>
                </div>
            </BrowserRouter>,

            <div className="container-fluid">
                <Footer />

            </div>


        </div>
    )
}



export default Main
