import React, { useState, useEffect } from "react"
//import "../Main.css"
import '../components/FeedbackForm.css'
import feedbackService from '../services/Feedback'
import userService from '../services/users'
import HomeButton from '../components/HomeButton'


///Palaute/kommentti lomake!!

const FeedbackForm = () => {

    const [newlaavu, setLaavu] = useState('');
    const [newstate, setState] = useState('')
    const [newdate, setDate] = useState('')
    const [newtextarea, setTextarea] = useState('')
    const [message, setMessage] = useState(null)
    const [user, setUsers] = useState([]);


    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user2 = JSON.parse(loggedUserJSON)
            setUsers(user2)
            feedbackService.setToken(user2.token)
            userService.setToken(user.token)
        }
    }, [])


    const optionhandleChange = (event) => {
        console.log('value', event.target.value)
        setLaavu(event.target.value)

    }
    console.log('LAAVU', newlaavu);

    const inputValueChange = (e) => {
        console.log('e', e.target.value);
        setState(e.target.value)

    }
    const textareaChange = (e) => {
        console.log('area', e.target.value);
        setTextarea(e.target.value)
    }
    const dateChange = (e) => {
        console.log('date', e.target.value);
        setDate(e.target.value)
    }
    //luo uuden palautteen ja tallentaa sen tietokantaan
    //luo localstorageen uuden palautteen loggedUserFeedback nimellä
    //sekä päivittää sivun

    const addFeedback = (event) => {
        event.preventDefault()

        const newPalaute = {
            name: newlaavu,
            state: newstate,
            feedback: newtextarea,
            date: newdate,
            userId: user.id
        }
        try {
            feedbackService
                .create(newPalaute)
                .then((data) =>
                    window.localStorage.setItem(
                        'loggedUserFeedback', JSON.stringify(data)
                    )
                )

            setMessage("Kiitos palautteestasi!")

            window.location.reload()


        } catch (error) {
            console.log("jotkut tiedot puuttuvat!", error)
        }
    }

    return (
        <div className="container-fluid" id="palautelomakeSivu">

            <div className="container" id="palautelomakeOtsikko">
                <h3>Tässä palautelomake, johon voit kirjoittaa kokemuksiasi laavukäynneistäsi.</h3>
                <p>Palautteet julkaistaan Kommentit- sivulla. Kommentit näkyvät vain kirjautuneille käyttäjille. Siellä laavuilla kävijät voivat kertoa kokemuksiaan laavuista ja suositella niitä.</p>
            </div>


            <div className="container" id="formialue">
                <form onSubmit={addFeedback} className="container" id="palautelomake"  >


                    <div className="form-group form-control-lg" id="laavuValinta">

                        <label htmlFor="exampleFormControlSelect1" id="sLaavuvalinta2">Valitse laavu tai kota: </label>

                        <select className="custom-select-lg" id="sLaavuvalinta" onChange={optionhandleChange} required>
                            <option value='Valitse laavu'>Valitse tästä..</option>
                            <option value='Harijärven kota'>Harijärven kota</option>
                            <option value="Sompalammen laavu">Sompalammen laavu </option>
                            <option value="Vaaralammen kota">Vaaralammen kota </option>
                            <option value="Pienen Heinälammen laavu">Pienen Heinälammen laavu</option>
                            <option value="Surmilammin laavu">Surmilammin laavu</option>
                            <option value="Pärnävaaran kota">Pärnävaaran kota</option>
                            <option value="Huttulammen kota">Huttulammen kota</option>
                            <option value="Härkinvaaran laavu">Härkinvaaran laavu </option>
                            <option value="Antin tupa -laavu">Antin tupa -laavu</option>
                            <option value="Nopsakin laavu">Nopsakin laavu</option>
                            <option value="Ilmonkota">Ilmonkota </option>
                            <option value="Ukonkota">Ukonkota </option>
                            <option value="Kaatamon Kyläkota"> Kaatamon Kyläkota </option>
                            <option value="Heinälammen laavu">Heinälammen laavu </option>
                            <option value="Viinijärvenkota">Viinijärvenkota </option>
                            <option value="Parkingrilli">Parkin Grilli </option>
                            <option value="Vaivion kota">Vaivion kota </option>
                            <option value="Oinaanvaaran kota">Oinaanvaaran kota </option>
                        </select>
                    </div>


                    <br></br>
                    <h5 id="kommenttiotsikko2">Anna kohteelle tähtiarvosana: </h5>
                    <div >

                        <div className="rating" id="tahtiMuotoilu">

                            <input type="radio" name="rating" onChange={inputValueChange} value="5" id="5" />
                            <label htmlFor="5">☆</label>
                            <input type="radio" name="rating" onChange={inputValueChange} value="4" id="4" />
                            <label htmlFor="4">☆</label>
                            <input type="radio" name="rating" onChange={inputValueChange} value="3" id="3" />
                            <label htmlFor="3">☆</label>
                            <input type="radio" name="rating" onChange={inputValueChange} value="2" id="2" />
                            <label htmlFor="2">☆</label>
                            <input type="radio" name="rating" onChange={inputValueChange} value="1" id="1" />
                            <label htmlFor="1">☆</label>
                        </div>

                    </div>

                    <div className="container">
                        <h5 id="kommenttiotsikko">Kommentoi laavulla käymistäsi ja kokemuksiasi:</h5>
                        <div className="form-group col-md-6" id="kommenttikentta">
                            <label htmlFor="exampleFormControlTextarea1">Kirjoita tähän kokemuksiasi:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" onChange={textareaChange} ></textarea>
                        </div>
                    </div>

                    <div className="constainer">

                        <h5 id="pvmOtsikko">Valitse lopuksi päivämäärä:</h5>
                        <div id="pvm">
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" name="date" onChange={dateChange} />
                        </div>
                    </div>

                    <br></br>
                    <p id="message">{message}</p>
                    <div id="submitBUttonDiv" >
                        <button type="Submit" id="submitButton">LÄHETÄ</button>

                    </div>

                    <HomeButton id="palautelomakeHOMEbutton" />
                </form >


            </div>







        </div >
    )
}
export default FeedbackForm