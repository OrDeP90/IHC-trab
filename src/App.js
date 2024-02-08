import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmacao from "./components/Confirmacao";
import Questionario1 from "./components/Questionario1";
import SintoMuito from './components/SintoMuito';
import Selecao from './components/Selecao'
import Feliz from './components/Feliz'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Final from './components/final-page';
import DominantEmotionComponent from "./components/DominantEmotionComponent";
import Emotion from "./components/Emotion";
import Confirmacao_feliz from "./components/Confirmacao_feliz";
import Confirmacao_raiva from "./components/Confirmacao_raiva";
import Confirmacao_tedio from "./components/Confirmacao_tedio";
import Confirmacao_triste from "./components/Confirmacao_triste";
import Solucao1 from "./components/solucao1"
import Solucao2 from "./components/solucao2"
import Solucao3 from "./components/solucao3"
import Solucao4 from "./components/solucao4"
import Solucao4_0 from "./components/solucao4guaradada"
import Sintomuitofinal from "./components/sintomuitofinal";
import SintoMuitto from "./components/SintoMuitto";
import Sintomuittofinal from "./components/sintomuittofinal";
import Solucao2t from "./components/solucao2t";
import Obrigado from "./pages/obrigadaAvaliacao"

import GrandeEstrela from "./pages/grandeEstrela";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Page1 />} />
                <Route exact path="" element={<Confirmacao emocao="triste" />} />
                <Route path="/triste" element={<Questionario1 emocao="triste" />} />
                <Route path="/raiva" element={<Questionario1 emocao="raiva" />} />
                <Route path="/entediado" element={<Questionario1 emocao="entediado" />} />
                <Route path="/ansioso" element={<Questionario1 emocao="ansioso" />} />
                <Route path="/sintomuito" element={<SintoMuito />} />
                <Route path="/sintomuitto" element={<SintoMuitto />} />
                <Route path="/selecao" element={<Selecao />} />
                <Route path="/feliz" element={<Feliz />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/Final" element={<Final />} />
                <Route path="/Emotion" element={<Emotion />} />
                <Route path="/Confirmacao" element={<Confirmacao/>}/>
                <Route path="/ConfirmacaoTriste" element={<Confirmacao_triste/>}/>
                <Route path="/ConfirmacaoRaiva" element={<Confirmacao_raiva/>}/>
                <Route path="/ConfirmacaoTedio" element={<Confirmacao_tedio/>}/>
                <Route path="/ConfirmacaoFeliz" element={<Confirmacao_feliz/>}/>
                <Route path="/solucao1" element={<Solucao1/>}/>
                <Route path="/solucao2" element={<Solucao2/>}/>
                <Route path="/solucao2t" element={<Solucao2t/>}/>
                <Route path="/solucao3" element={<Solucao3/>}/>
                <Route path="/solucao4" element={<Solucao4/>}/>
                <Route path="/solucao40" element={<Solucao4_0/>}/>
                <Route path="/sintomuitofinal" element={<Sintomuitofinal />} />
                <Route path="/sintomuittofinal" element={<Sintomuittofinal />} />
                <Route path="/avaliacao" element= {<GrandeEstrela/>}/>
                <Route path="/obrigad" element= {<Obrigado/>}/>
            </Routes>
        </Router>
    );
}

export default App;
