import React from "react";
import { useNavigate } from "react-router-dom";

//Paluu kotisivulle nappula komponentti jota käyttää usealla sivulla

function HomeButton() {
    let history = useNavigate();

    const handleClick = () => {
        history("/");
    }

    return (
        <button onClick={handleClick} className="btn btn-success">
            Go to home page
        </button>
    );
}
export default HomeButton