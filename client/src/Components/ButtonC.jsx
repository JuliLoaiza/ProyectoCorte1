import React from "react";
import "../Components/styles/Button.css";

const ButtonC = (props) => {
	return (
		<button
			type={props.type}
			id={props.id}
			placeholder={props.placeholder}
			className="ButtonC"
		//onClick={props.onClick}
		>
			{props.placeholder}
		</button>
	);
};
export default ButtonC;
