import { Link, Navigate, Route, Switch } from 'react-router-dom';
import { LoginC } from '../../Pages/LoginC';
import { LoginP } from '../../Pages/LoginP';
import { HomeC } from '../../Pages/HomeC';
import { HomeP } from '../../Pages/HomeP';
import { RegistroC } from '../../Pages/RegistroC';
import { RegistroP } from '../../Pages/RegistroP';

export const MainApp = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomeC />} />
                <Route path="/homep" element={<HomeP />} />
                <Route path="/loginc" element={<LoginC />} />
                <Route path="/loginp" element={<LoginP />} />
                <Route path="/registroc" element={<RegistroC />} />
                <Route path="/registrop" element={<RegistroP />} />
                <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
        </>
    )
}
