import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { LoginC } from '../../Pages/LoginC';
import { LoginP } from '../../Pages/LoginP';
import { HomeC } from '../../Pages/HomeC';
import { HomeP } from '../../Pages/HomeP';
import { RegistroC } from '../../Pages/RegistroC';
import { RegistroP } from '../../Pages/RegistroP';

export const MainApp = () => {
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

    )
}
