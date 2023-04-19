import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import RegistroC from "./Pages/RegistroC";
import RegistroP from "./Pages/RegistroP";
import LoginP from "./Pages/LoginP";
import LoginC from "./Pages/LoginC";
import HomeC from "./Pages/HomeC";
import HomeP from "./Pages/HomeP";
//import "./index.css";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<HomeP />
	</BrowserRouter>
);
