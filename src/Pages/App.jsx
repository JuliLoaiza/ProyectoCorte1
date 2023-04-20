import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { LoginC } from './LoginC';
import { HomeC } from './HomeC';
import { HomeP } from './HomeP';
import { LoginP } from './LoginP';
import { RegistroC } from './RegistroC';
import { RegistroP } from './RegistroP';

import "../Pages/Styles/App.css";

function App() {
	return (
		<>
			<h1>Main App</h1>
			<hr />

			<Routes>
				<Route path="/" element={<HomeC />} />
				<Route path="/homep" element={<HomeP />} />
				<Route path="/loginc" element={<LoginC />} />
				<Route path="/loginp" element={<LoginP />} />
				<Route path="/registroc" element={<RegistroC />} />
				<Route path="/registrop" element={<RegistroP />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default App;
