import React, { useState, useEffect } from "react";

import feedbackService from '../services/Feedback';
import userService from '../services/users'
import './ProfilePage.css';
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa'




const ProfilePage = () => {


    //kaikkien kannassa olevien käyttäjien tiedot
    const [userFromdb, setUserFromdb] = useState(null)

    //eka käyttäjä joka on kirjautunut storen tieto!
    const [useri, setUsersi] = useState(null);

    const [updatedUser, setUpdatedUser] = useState(null)

    //kaikki palautteet tässä!
    const [feedback, setFeedback] = useState(null)

    //tässä käyttäjän kannassa olevat tiedot!
    const [user, setUser] = useState(null)

    //kirjautuneen käyttäjän palautteet
    const [user2fb, setUsers2fb] = useState(null)


    const [message, setMessage] = useState('')



    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUsersi(user)
            userService.setToken(user.token)
            feedbackService.setToken(user.token)
        }

        const UpdatedUser2 = window.localStorage.getItem('loggedUser2')
        if (UpdatedUser2) {
            const us = JSON.parse(UpdatedUser2)
            setUpdatedUser(us)

        }
    }, [])

    useEffect(() => {

        userService
            .getAllusers()
            .then((users2) => {
                setUserFromdb(users2)
            })
            .catch((error) =>
                setMessage('Jotain meni pieleen..', error))

    }, [])

    useEffect(() => {
        feedbackService
            .getAll()
            .then((fb) =>
                setFeedback(fb),
            )
            .catch((error) =>
                setMessage('Jotain meni pieleen..', error))
    }, [user2fb])


    //Näyttää käyttäjän palautteet!!
    const ShowUSerData = () => {
        if (!useri === null) {
            console.log('EI OO stores tietoo');
            return
        }
        userService
            .getAllusers()
            .then(info =>
                setUserFromdb(info))


        const user3 = userFromdb.filter(fb => fb.id === useri.id)

        const fb = user3.map(fb => fb.feedback)
        setUsers2fb(fb)

    }


    let history = useNavigate();

    //päivittää käyttäjäprofiilia!
    const ChangeUserProfile = async (e) => {
        e.preventDefault()
        if (!useri) {
            return
        }
        localStorage.setItem("userID", e.target.value)

        history("/editUserInfo");

        await userService
            .getAllusers()
            .then(info =>
                setUserFromdb(info))

        const user = userFromdb.filter(fb => fb.id === useri.id)
        setUser(user)


    }

    //vaihtaa käyttäjän profiilikuvan
    const ChangeUserPhoto = async (e) => {
        e.preventDefault()
        if (!useri) {
            return
        }
        localStorage.setItem("photoID", e.target.value)

        history('/editUserphoto')

        await userService
            .getAllusers()
            .then(info =>
                setUserFromdb(info))

        const user = userFromdb.filter(fb => fb.id === useri.id)
        if (user) {

            setUser(user)
        }

    }

    ///POISTAA kommentin!
    const deleteFeedback = (e) => {
        e.preventDefault()
        if (feedback === null) {
            return
        }
        try {
            const Ufb = feedback.filter(one => one.id === e.target.value)
            const theOne = Ufb.map((i) => i.id)

            feedbackService
                .remove(theOne)
                .then(data =>
                    setFeedback(feedback.filter(one => one.id === !data),
                        setTimeout(() => {
                            setMessage('Kommentti poistettu!')
                        }, 3000)
                    )
                )
                .catch((error) =>
                    setMessage('Jotain meni pieleen..', error))

            history('/deleted')

        } catch (error) {
            console.log('Jotain meni vikaan', error);
        }
    }


    ///PALAUTTEIDEN PÄIVITYS
    const ChangeFeedback = (e) => {
        e.preventDefault()

        localStorage.setItem("ID", e.target.value)

        history("/editFeedback");

        setTimeout(() => {
            setMessage('Kommentti päivitetty!')
        }, 3000)
    }

    return (
        <div id="profiilisivu1" className="container-fluid">
            <div className="profile">

                <div className="container" id="kayttajaOsa">
                    {useri === null ?
                        <div className="itemA">
                            <h4>Ei kirjautunutta käyttäjää</h4>

                        </div>
                        :
                        <div className="itemB">

                            <img src={updatedUser === null ? useri.pic : updatedUser.pic} alt="profile" className="profiilikuva" />
                            <h4>Kirjautuneena: {updatedUser === null ? useri.name : updatedUser.name}</h4>
                            <h4>Käyttäjätunnus: {updatedUser === null ? useri.username : updatedUser.username}</h4>
                            <h4>Omat kommentit: {user2fb === null ? useri.feedback.length + " kpl" : user2fb[0].length + " kpl"}</h4>

                            <button onClick={ChangeUserProfile} value={user === null ? useri.id : user[0].id} className="button">Muokkaa tietoja</button>
                            <button onClick={ChangeUserPhoto} value={user === null ? useri.id : user[0].id} className="button">Lisää profiilikuva</button>
                            <button onClick={ShowUSerData} className="button">Näytä kommenttini</button>
                        </div>
                    }

                    {message}
                </div>

            </div>

            <div className="container">

                <div className="profiilisivu">

                    <h2 id="omatKommentit">Omat kommentit</h2>


                    <div>
                        {(user2fb === null) ?
                            <div id="omatKommentit">
                                <p>Mikäli olet kommentoinut niin tässä näet kommenttisi klikkamalla yllä olevaa nappia..</p>
                            </div>
                            :

                            <div className="ilmoitukset">

                                {user2fb[0].map((feedb) =>

                                    <div className="ilmoitus" key={feedb.id}>
                                        <h2>{feedb.name}</h2>
                                        <h4>{feedb.feedback}</h4>
                                        <h5>Ilmoitus jätetty:{feedb.date} </h5>
                                        <div value={feedb.state} className='tahdet'> {[...Array(feedb.state || 5)].map((star) => {
                                            return <FaStar key={Math.random(988)} size={35} color="yellow" />
                                        })}
                                        </div>
                                        <button onClick={ChangeFeedback} value={feedb.id}>Muokkaa</button>
                                        <button onClick={deleteFeedback} value={feedb.id} >Poista</button>

                                    </div>)
                                }

                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProfilePage
