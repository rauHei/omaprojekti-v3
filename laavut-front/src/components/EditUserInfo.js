import React, { useState, useEffect } from "react";
import userService from '../services/users';
import { useNavigate } from "react-router-dom";
import './Register.css';

//päivittää käyttäjätiedot...
const EditUserInfo = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [user, setUser] = useState(null)
    const [UpdatedUser, setUpdatedUser] = useState(null)
    const [succesMessage, setSuccesMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [Id, setId] = useState(null)

    let history = useNavigate();

    useEffect(() => {

        setId(localStorage.getItem('userID'))
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)

        }
    }, [])




    const handleNameChange = (e) => {
        e.preventDefault()
        console.log('name:', e.target.value);
        setName(e.target.value)
    }
    const handleUserNameChange = (e) => {
        e.preventDefault()
        console.log('username:', e.target.value);
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        console.log('password:', e.target.value);
        setPassword(e.target.value)
    }

    console.log("id", Id)

    //päivittää muutoksen..
    //Jos ei id:tä ole ei tapahdu mitäänm muutoin asetetaa uusi käyttäjä
    //jolle muodostetaa uusi token (leikkö turha kuitenkin..)
    const handleChange = async (event) => {
        event.preventDefault()

        if (!Id) {
            return
        }
        const newUser = {
            username: username,
            name: name,
            password: password,
            token: user.token

        }
        try {
            await userService
                .updateUser(Id, newUser)
                .then(user => {
                    setUpdatedUser(user.data)
                    setSuccesMessage('Tietojen päivitys onnistui!')

                    localStorage.setItem("loggedUser2", JSON.stringify(user.data))

                    setTimeout(() => {
                        history('/profile')
                    }, 3000)

                })
                .catch((e) => {
                    setErrorMessage('Tietojen päivitys epäonnistui :( )' + e)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 3000)
                })



        } catch (error) {
            console.log('jotain pielessä', error);
        }
    }

    console.log('UPDATED USER ON:', UpdatedUser);
    // console.log('USER', user);

    //takaisin paluu nappula!
    const back = () => {
        history('/profile')
    }

    console.log('USERU', user);

    return (
        <div className="container-fluid" id="rekisteroi2">

            <div>
                <p

                    className={errorMessage ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errorMessage}

                </p>
                <p
                    className={succesMessage ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {succesMessage}
                </p>
            </div>

            <div className="container" id="alue1">
                <form onSubmit={handleChange} id="updateform"  >
                    <h5>Muokkaa Käyttäjätietojasi</h5>
                    <h6>Syötä kaikkiin kenttiin tietosi</h6>
                    <br></br>
                    Käyttäjänimi:
                    <input
                        className="form-control mb-2 mr-sm-2 -sm "
                        id="knimi"

                        placeholder="username"

                        onChange={handleUserNameChange}
                    />
                    Nimi:
                    <input
                        className="form-control mb-3 mr-sm-4 -sm "
                        id="nimiK"

                        placeholder="name"

                        onChange={handleNameChange}
                    />
                    Salasana:
                    <input
                        type="password"
                        className="form-control mb-3 mr-sm-4"
                        id="pwd2"

                        placeholder="password"

                        onChange={handlePasswordChange}
                    />



                    <button type="reset" className="btn btn-outline-dark" id="nappi1">Tyhjennä</button >
                    <button className="btn btn-outline-dark" id="nappi" type="submit">Tallenna Muutokset</button>

                </form>
            </div>

            <div id="osa2">
                <button
                    className="btn btn-outline-dark"
                    onClick={back}
                    id="takas"
                >Takaisin profiili sivulle
                </button>

            </div>
        </div>
    )
}

export default EditUserInfo;
