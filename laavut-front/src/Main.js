import React, { useState, useEffect } from "react";

import {
    Route,
    NavLink,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import Home from "./containers/Home";

import './Main.css';

import userService from './services/users';
import feedbackService from './services/Feedback';
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
            userService.setToken(user.token)
            feedbackService.setToken(user.token)
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
                            <Route path="/login" exact element={<LoginForm />} />

                            <Route path="/laavut/harijarvenkota" exact element={<Harijarvenkota />} />
                            <Route path="/laavut/antintupa" exact element={<Antintupa />} />
                            <Route path="/laavut/nopsakinlaavu" exact element={<Nopsakinlaavu />} />
                            <Route path="/laavut/pienenheinalammenlaavu" exact element={<Pienenheinalammenlaavu />} />
                            <Route path="/laavut/parnankodat" exact element={<Parnankodat />} />
                            <Route path="/laavut/surmilamminlaavu" exact element={<Surmilamminlaavu />} />
                            <Route path="/laavut/vaaralammenkota" exact element={<Vaaralammenkota />} />
                            <Route path="/laavut/vaivionkota" exact element={<Vaivionkota />} />
                            <Route path="/laavut/harkinvaaranlaavu" exact element={<Harkinvaaranlaavu />} />
                            <Route path="/laavut/oinaanvaarankota" exact element={<Oinaanvaarankota />} />
                            <Route path="/laavut/ilmonkota" exact element={<Ilmonkota />} />
                            <Route path="/laavut/ukonkota" exact element={<Ukonkota />} />
                            <Route path="/laavut/parkingrilli" exact element={<Parkingrilli />} />
                            <Route path="/laavut/heinalammenlaavu" exact element={<Heinalammenlaavu />} />
                            <Route path="/laavut/viinijarvenkota" exact element={<Viinijarvenkota />} />
                            <Route path="/laavut/sompalammenlaavu" exact element={<Sompalammenlaavu />} />
                            <Route path="/laavut/huttulammenkota" exact element={<Huttulammenkota />} />
                            <Route path="/laavut/kylakota" exact element={<Kylakota />} />


                            <Route path="/feedback" exact element={<FeedbackPage />} />
                            <Route path="/feedbackform" exact element={<FeedbackForm />} />

                            <Route path="/profile" exact element={<ProfilePage />} />
                            <Route path="/editUserInfo" exact element={<EditUserInfo />} />
                            <Route path="/editFeedback" exact element={<EditFeedbackForm />} />
                            <Route path="/editUserphoto" exact element={<EditUserPhoto />} />
                            <Route path="/deleted" exact element={<Deleted />} />

                            <Route path="/" exact element={<Home />} />
                            <Route path="/laavut" exact element={<LaavutPage />} />
                            <Route path="/map" exact element={<Kartta />} />
                            <Route path="/register" exact element={<Register />} />
                            <Route path="/login" exact element={<LoginForm />} />






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
