import React from "react";
import { useNavigate } from "react-router-dom";
import '../containers/ProfilePage.css';


//kommentin poistosivu

const Deleted = () => {

    let history = useNavigate();

    const poistu = () => {

        setTimeout(() => {
            history('/profile')
        }, 2000)

    }

    return (
        <div className="container-fluid" id="deletedsivu">
            <div className="container mx-auto mt-6" id="delboksi">
                <div className="del">
                    <div className="card text-white bg-success mx-auto"  >
                        <h5 className="card-title text-white mx-auto" id="teksti">Palaute poistettu onnistuneesti!</h5>

                        {poistu()}
                    </div >
                </div>
            </div >
        </div>
    )
}
export default Deleted