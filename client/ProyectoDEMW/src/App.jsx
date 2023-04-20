import { Navigate, Route, Routes } from 'react-router-dom';
import LoginC from './Pages/LoginC';
import LoginP from './Pages/LoginP';
import RegistroC from './Pages/RegistroC';
import RegistroP from './Pages/RegistroP';
import HomeC from './Pages/HomeC';
import HomeP from './Pages/HomeP';

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/loginc" element={<LoginC />} />
        <Route path="/loginp" element={<LoginP />} />
        <Route path="/registroc" element={<RegistroC />} />
        <Route path="/registrop" element={<RegistroP />} />
        <Route path="/homec" element={<HomeC />} />
        <Route path="/homep" element={<HomeP />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;