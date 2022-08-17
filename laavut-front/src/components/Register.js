import React, { useState } from "react"
//import "../Main.css"
import './Register.css';
import HomeButton from "./HomeButton"
import userService from '../services/users'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const [succesMessage, setSuccesMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)



    const handleNameChange = (e) => {
        e.preventDefault()
        console.log('username:', e.target.value);
        setName(e.target.value)
    }

    const handleUserNameChange = (e) => {
        e.preventDefault()
        console.log('name:', e.target.value);
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        console.log('password:', e.target.value);
        setPassword(e.target.value)
    }


    //register form 
    const handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            username: username,
            name: name,
            password: password,
        }

        userService
            .createUser(newPerson)
            .then(() => {
                setTimeout(() => {
                    setSuccesMessage('Nyt voit kirjautua sisään!')
                }, 3000)

                window.location.reload()


            })
            .catch((e) => {
                setTimeout(() => {
                    setErrorMessage('Tarkasta tiedot tapahtui virhe )' + e)
                }, 3000)
            })

    }

    return (

        <div className="container-fluid" id="rekisteroi">

            <div className="container" id="emsg">
                <p
                    className={errorMessage ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errorMessage}
                </p>
            </div>

            <div className="container" id="register" >

                <form onSubmit={handleSubmit} id="registerform" className="registerform" action="/pics" encType="multipart/form-data" method="post">
                    <h5>Rekistöröidy sivustolle</h5>
                    <br></br>
                    <label>Käyttäjänimi</label>
                    <input
                        className="form-control mb-2 mr-sm-2"
                        name="username"
                        placeholder="username"
                        required
                        onChange={handleUserNameChange}
                    />
                    <label>Nimi:</label>
                    <input
                        className="form-control mb-2 mr-sm-2"
                        name="name"
                        placeholder="name"
                        required
                        onChange={handleNameChange}
                    />
                    <label>Salasana:</label>
                    <input
                        type="password"
                        className="form-control mb-2 mr-sm-2"
                        name="psw"
                        placeholder="password"
                        required
                        onChange={handlePasswordChange}
                    />
                    <button className="btn btn-info" type="reset" >Tyhjennä</button>
                    <button className="btn btn-success" type="submit" value="Upload">Register</button>
                    <p id="smessage">{succesMessage}</p>
                    <p id="emessage">{errorMessage}</p>
                </form>

            </div>

            <div className="homeButton">
                <HomeButton />
            </div>

        </div>
    )
}
export default Register