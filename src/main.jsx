import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import RegistroC from "./Pages/RegistroC";
import RegistroP from "./Pages/RegistroP";
import LoginP from "./Pages/LoginP";
import LoginC from "./Pages/LoginC";
import HomeC from "./Pages/HomeC";
import HomeP from "./Pages/HomeP";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<LoginC />
	</React.StrictMode>
);
