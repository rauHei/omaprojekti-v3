import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userService from '../services/users';
import './Register.css';

//lataa käyttäjälle uuden profiikuvan

const EditUserPhoto = () => {
    const [pic, setPic] = useState(null)
    const [id, setId] = useState(null)
    const [data1, setData1] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {

        setId(localStorage.getItem('photoID'))

    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            userService.setToken(user.token)

        }
    }, [])


    let history = useNavigate();

    //kuvan lataus, ladataan kuva formidata muodossa palvelimelle.

    const UploadImage = async (e) => {
        e.preventDefault()

        const files = e.target.files

        if (files) {
            const data = new FormData()
            data.append('image', files[0])

            setPic(data)
            console.log('Data', data);
        } else {
            console.log('NO data was found');
        }


    }

    console.log('USERI täÄL', user);
    console.log('image', pic);


    //kuvan lataus/ päivitys, lähetään kuvan tiedot backendiin ja 
    //storeen asetetaan myös päivittetyyn "loggedUser2" tieto
    const Load = async () => {

        if (!id || !pic) {
            return

        }
        await userService
            .updateUserPhoto(id, pic)
            .then((data) =>
                localStorage.setItem("loggedUser2",
                    JSON.stringify(data.data)))


        history('/profile')
    }



    //poistumisfunktio
    const poistu = () => {

        setTimeout(() => {
            history('/profile')
        }, 2000)


    }

    return (
        <div className="container-fluid" id="lataaKuva">
            <form encType="multipart/form-data" className="custom-file">
                <h1>Profiilikuva:</h1>

                <input
                    type="file"
                    id="fileinput"
                    className="custom-file-input"
                    name="image"
                    onChange={UploadImage}
                />
                <button className="btn btn-outline-dark" id="lataanappi" onClick={Load} type="button" >Tallenna Kuva</button>
            </form>


            <div id="lataakuvaPaluunappi">
                <button id="lataaKuvanappula" onClick={poistu}>Takaisin profiilisivulle</button>
            </div>
        </div >
    )

}
export default EditUserPhoto;