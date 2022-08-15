import React, { useState, useEffect } from 'react';
import feedbackService from '../services/Feedback';
import { FaStar } from 'react-icons/fa'
import './FeedbackPage.css';


//kommenttisivu/comments/feedbacks

function FeedbackPage() {

  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    feedbackService
      .getAll()
      .then((initialFeedback) =>
        setFeedback(initialFeedback)
      )
  }, [])

  return (
    <div className='container-fluid' id='Palautesivu'>

      <div className='container'>
        {feedback === null ?
          <div>
            <p>ei ilmoituksia!</p>
          </div>

          :
          <div className="ilmoitukset">
            <div className='IlmoituksetYläosa'>
              <h1>Tältä sivulta löydät palautteita laavuilla käyneiltä henkilöiltä</h1>
            </div>
            {feedback.map((all) => (
              <div key={Math.random(586)} className="ilmoitus2">
                <div>
                  <h1 >{all.name}</h1>
                  <h2 >Palautteen antanut: {(all.user === null) ? "Käyttäjä poistettu" : all.user.username}</h2>
                  <img src={(all.user === null) ? "Käyttäjä poistettu" : all.user.pic} alt="kuva" className='palautekuva' />
                </div >
                <div>
                  <p>Palautteen antopäivä: </p>
                  <h3 >{all.date}</h3>
                  <p>Palaute: </p>
                  <h3 >{all.feedback}</h3>
                  <p>Arvio: </p>
                  <div className='tahdet'> {[...Array(all.state || 5)].map((star) => {
                    return <FaStar key={Math.random(92)} size={45} color="yellow" />
                  })}
                  </div>
                </div>
              </div>


            ))}


          </div>
        }
      </div>
    </div>
  )
}

export default FeedbackPage;
