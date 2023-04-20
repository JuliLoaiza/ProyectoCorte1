import React from "react";
import '../Components/styles/Input.css'

const InputC = (props) => {
    return (
        <input type={props.type} id={props.id} placeholder={props.placeholder} className="inputC" />
    )
}

export default InputC