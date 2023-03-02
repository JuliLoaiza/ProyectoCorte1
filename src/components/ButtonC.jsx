import React from "react";
import './styles/ButtonC.css'

const ButtonC = (props) => {
    return(
        <button type={props.type} id={props.id} placeholder={props.placeholder} className="ButtonC">{props.placeholder}</button>
    )
}
export default ButtonC