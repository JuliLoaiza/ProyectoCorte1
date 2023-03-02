import React from "react";
import './styles/InputC.css'

const InputC = (props) => 
{
    return(
        <input type= {props.type} id={props.id} placeholder={props.placeholder} className="inputC" />
    )
}

export default InputC