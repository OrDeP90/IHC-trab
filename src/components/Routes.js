import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmacao from './Confirmacao';
import Questionario1 from './Questionario1';
import SintoMuito from './SintoMuito';
import Selecao from './Selecao'
import Feliz from './Feliz'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Final from './final-page';

const routes = () => {
    <Router>
        <Routes>
        <Route exact path="" element={<Page1/>}/>
        <Route path="/tristezaconfirma" element={<Confirmacao emocao = "triste"/>} />
        <Route path="/triste" element={<Questionario1 emocao = "triste"/>} />
        <Route path="/raiva" element={<Questionario1 emocao = "raiva"/>} />
        <Route path="/entediado" element={<Questionario1 emocao = "entediado"/>} />
        <Route path="/ansioso" element={<Questionario1 emocao = "ansioso"/>} />
        <Route path="/sintomuito" element={<SintoMuito />} />
        <Route path="/selecao" element={<Selecao />} />
        <Route path="/feliz" element={<Feliz />} />
        <Route exact path="" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
        <Route path="/Final" element={<Final/>}/>
        </Routes>
  </Router>
}

export default routes;