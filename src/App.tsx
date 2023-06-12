import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {Registation} from "Registation";
import {Login} from "Login";


function App() {
    return (
        <div>

            <NavLink to={'/login'}>Login--</NavLink>
            <NavLink to={'/register'}>Registation--</NavLink>


            <Routes>
                <Route path="/register" element={<Registation/>}/>
                <Route path="login" element={<Login/>}/>

                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
                <Route path="/404" element={<h2>404: СТРАНИЦА НЕ НАЙДЕНА...ОШИБКА!</h2>}/>
            </Routes>

        </div>

    );
}

export default App;
