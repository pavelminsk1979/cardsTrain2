import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {Login} from "feature/auth/Login";


function App() {
    return (
        <div>

            <NavLink to={'/login'}>Login--</NavLink>


            <Routes>
                <Route path="login" element={<Login/>}/>

                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
                <Route path="/404" element={<h2>404: СТРАНИЦА НЕ НАЙДЕНА...ОШИБКА!</h2>}/>
            </Routes>

        </div>

    );
}

export default App;
