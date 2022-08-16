import React, { useState, useEffect } from "react"
import "../Main.css"
import loginService from '../services/Login'
import feedbackService from '../services/Feedback';
import userService from '../services/users';
import Togglable from "./Togglable";
import { useNavigate } from "react-router-dom";



//kirjautumis komponentti/Sign in component

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [updUser, setUpduser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        const UpdatedUser = window.localStorage.getItem('loggedUser2')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
        if (UpdatedUser) {
            const user2 = JSON.parse(UpdatedUser)
            setUpduser(user2)
        }
    }, [])


    let history = useNavigate();


    const handleNameChange = (e) => {
        e.preventDefault()
        console.log('USername', e.target.value);
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        console.log('Passworf', e.target.value);
        setPassword(e.target.value)
    }

    //login function
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.loginUser(
                { username, password }
            )

            setUser(user)

            feedbackService.setToken(user.token)
            userService.setToken(user.token)

            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )
            setUsername('')
            setPassword('')

            console.log('KIRJAUTUMINEN ONNISTUI');

            // window.location.reload()
            history('/')

        } catch (error) {
            setUser(null)
            console.log('wrong credentials', error);
            window.localStorage.clear()
        }

    }



    //logout func
    const handleLogOut = async (event) => {
        event.preventDefault()

        try {

            setUser(null)
            window.localStorage.clear()
            history('/')
            window.location.reload()



        } catch (error) {
            console.log('Was not able to logOUT', error);

        }

    }

    console.log('UPDUSER', updUser);
    return (

        <div>
            {user === null ?
                <Togglable buttonLabel='Kirjaudu Sisään'>
                    <form onSubmit={handleLogin} className="d-flex" >
                        <div>
                            <input
                                autoComplete="off"
                                placeholder="username"
                                className="form-control mr-auto"
                                onChange={handleNameChange}
                                required
                            />
                        </div>

                        <div>
                            <input
                                placeholder="password"
                                className="form-control mar-auto"
                                type="password"
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button className="btn btn-outline-primary mb-2 mr-sm-2" type="submit">login</button>
                    </form>
                    <p>
                        Need an Account?
                        <br />
                        <span className="line">
                            <a href="http://localhost:3000/register/">Sign Up</a>
                        </span>
                    </p>
                </Togglable>
                :
                <div>
                    <p >{updUser === null ? user.name : updUser.name} logged in</p>
                    <button className="btn btn-outline-primary" onClick={handleLogOut}>Logout</button>

                </div>
            }
        </div>

    )
}
export default LoginForm
