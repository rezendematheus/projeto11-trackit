import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserContext from "./components/UserContext";
import Habitos from "./pages/HabitosPage";
import Historico from "./pages/HistoricoPage";
import Hoje from "./pages/HojePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import React from "react";
import Header from "./components/Header";

function App() {
  const [userdata, setUserdata] = useState()
  userdata && console.log(userdata);
  return (
    <UserContext.Provider value={userdata}>
      <BrowserRouter>
        {userdata && <Header />}
        <Routes>
            <Route path="/" element={<Login setUserdata={setUserdata}/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <Route path="/habitos" element={<Habitos />}/>
            <Route path="/hoje" element={<Hoje />}/>
            <Route path="/historico" element={<Historico />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
