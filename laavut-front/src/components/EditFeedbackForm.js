import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import feedbackService from '../services/Feedback';
import './FeedbackForm.css';


//kommentit muokkaussivu

const EditFeedbackForm = () => {

    const [newpalaute, setNewpalaute] = useState(null)
    const [newlaavu2, setLaavu] = useState('');
    const [newstate2, setState] = useState(null)
    const [newdate2, setDate] = useState('')
    const [newtextarea2, setTextarea] = useState('')
    const [message, setMessage] = useState(null)
    const [Id, setId] = useState(null)


    useEffect(() => {

        setId(localStorage.getItem('ID'))


    }, [])



    let history = useNavigate();

    const optionhandleChange = (event) => {
        setLaavu(event.target.value)
    }

    const inputValueChange = (e) => {
        setState(e.target.value)
    }

    const textareaChange = (e) => {
        setTextarea(e.target.value)
    }
    const dateChange = (e) => {
        setDate(e.target.value)
    }

    //päivittää ja palaa takaisin profiilisivulle!
    const palaa = () => {

        if (!Id) {
            return
        }

        const newFeedback = {
            name: newlaavu2,
            state: newstate2,
            feedback: newtextarea2,
            date: newdate2,

        }
        if (newFeedback) {

            feedbackService
                .update(Id, newFeedback)
                .then(fb => {
                    setNewpalaute(fb)
                })

            setMessage("Päivitykset lähettetty!")
            history('/profile')

        } else {
            console.log("jotkut tiedot puuttuvat!")
        }

    }

    //takaisin paluu nappula!
    const back = () => {
        history('/profile')
    }

    return (
        <div className="container-fluid" id="muunnaPalautettapaaS">

            <div id="formialue2">
                <h3>Muunna formipalautettasi</h3>
                <form onSubmit={palaa} className="palautelomake"   >
                    <select className="custom-select" onChange={optionhandleChange} id="exampleFormControlSelect1" >
                        <option value='Valitse laavu'>Valitse laavu tai kota..</option>
                        <option value='Harijärven kota'>Harijärven kota</option>
                        <option value="Sompalammen laavu">Sompalammen laavu </option>
                        <option value="Vaaralammen kota">Vaaralammen kota </option>
                        <option value="Pienen Heinälammen laavu">Pienen Heinälammen laavu</option>
                        <option value="Surmilammin laavu">Surmilammin laavu</option>
                        <option value="Pärnävaaran kota">Pärnävaaran kota</option>
                        <option value="Pärnävaaran laavu">Pärnävaaran laavu</option>
                        <option value="Huttulammen kota">Huttulammen kota</option>
                        <option value="Härkinvaaran laavu">Luontopolun laavu </option>
                        <option value="Antin tupa -laavu">Antin tupa -laavu</option>
                        <option value="Nopsakin laavu">Nopsakin laavu</option>
                        <option value="Ilmonkota">Ilmonkota </option>
                        <option value="Ukonkota">Ukonkota </option>
                    </select>

                    <div id="muunnaTahdet">
                        <h5 id="otsikkoarviot">Anna käymäsi kohteelle tähtiarvosana</h5>
                        <div className="rating">

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

                    <h5 id="muunnaotsikkoS">Kommentoi laavulla käymistäsi ja kokemuksiasi:</h5>
                    <div className="form-row">
                        <div className="form-group col-md-6" id="muunnaTextarea">
                            <label htmlFor="exampleFormControlTextarea1">Kommenttikenttä</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" onChange={textareaChange} ></textarea>
                        </div>
                        <br></br>
                        <h5 id="muunnaotsikkoS2">Valitse lopuksi päivämäärä:</h5>
                        <div className="form-group col-md-6-auto">
                            <label id="dateLabel" htmlFor="date">Date: </label>
                            <input type="date" id="date" name="date" onChange={dateChange} />
                        </div>
                    </div>
                    <br></br>
                    <button className="btn btn-success" type="Submit" id="lahetaMuutos" onClick={palaa} >LÄHETÄ</button>
                    {message}


                </form >
            </div>

            <div id="takasinNappulaedit">
                <button
                    onClick={back}>Takaisin profiili sivulle</button>
            </div>
        </div>
    )
}
export default EditFeedbackForm

