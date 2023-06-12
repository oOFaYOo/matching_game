import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Menu from "./pages/Menu";
import Game from "./pages/Game";

function App() {
  return (
    // <div className="App-logo bg-pink-700 w-12 h-12"></div>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/menu'}/>}/>
        <Route path={'/menu'} element={<Menu />}/>
        <Route path={'/game'} element={<Game />}/>
        <Route path={'/*'} element={<Navigate to={'/'}/>}/>
      </Routes>
  );
}

export default App;
