/*import { useEffect, useRef, useState } from "react";
import { useExternalScript } from "./helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "./helpers/ai-sdk/loader";

import './App.css';

import DominantEmotionComponent from "./components/DominantEmotionComponent";
import SecondScreenComponent from "./components/SecondScreenComponent"; // Importe o componente da segunda tela

function App() {
  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const videoEl = useRef(undefined);

  const [dominantEmotion, setDominantEmotion] = useState("");
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  useEffect(() => {
    videoEl.current = document.getElementById("videoEl");

    async function getAiSdk() {
      if (aiSdkState === "ready" && mphToolsState === "ready") {
        const { source, start } = await getAiSdkControls();
        await source.useCamera({
          toVideoElement: document.getElementById("videoEl"),
        });
        await start();
      }
    }

    // Ouvir o evento personalizado "emotionChange"
    function handleEmotionChange(event) {
      const newDominantEmotion = event.detail.dominantEmotion || "";
      setDominantEmotion(newDominantEmotion);

      // Lógica para mudar de tela quando a emoção for detectada
      if (newDominantEmotion !== "" && newDominantEmotion.toLowerCase() !== "neutral") {
        console.log(newDominantEmotion)
        setShowSecondScreen(true);
      }
    }

    getAiSdk();

    // Adicionar o ouvinte de evento ao componente montado
    window.addEventListener("emotionChange", handleEmotionChange);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("emotionChange", handleEmotionChange);
    };
  }, [aiSdkState, mphToolsState]);

  return (
    <div className="App">
      <header className="App-header">
        {showSecondScreen ? (
          <SecondScreenComponent />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DominantEmotionComponent />
            <hr className="solid" style={{ width: "100%" }}></hr>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;*/







/*


import React, { Component } from 'react';
import "./components/styles/Global.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmacao from './components/Confirmacao';
import Questionario1 from './components/Questionario1';
import SintoMuito from './components/SintoMuito';
import Selecao from './components/Selecao'
import Feliz from './components/Feliz'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Final from './components/final-page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/final-page" element={<Final />} />
          <Route exact path="" element={<Confirmacao emocao = "triste"/>} />
          <Route path="/confirmacaoFeliz" element={<Confirmacao emocao = "feliz"/>} />
          <Route path="/confirmacaoAnsioso" element={<Confirmacao emocao = "ansioso"/>} />
          <Route path="/confirmacaoRaiva" element={<Confirmacao emocao = "raiva"/>} />
          <Route path="/confirmacaoTedio" element={<Confirmacao emocao = "tedio"/>} />
          <Route path="/triste" element={<Questionario1 emocao = "triste"/>} />
          <Route path="/raiva" element={<Questionario1 emocao = "raiva"/>} />
          <Route path="/tedio" element={<Questionario1 emocao = "entediado"/>} />
          <Route path="/ansioso" element={<Questionario1 emocao = "ansioso"/>} />
          <Route path="/sintomuito" element={<SintoMuito />} />
          <Route path="/selecao" element={<Selecao />} />
          <Route path="/feliz" element={<Feliz />} />
        </Routes>
      </Router> 
    );
  }
}

export default App;*/





import { useEffect, useRef, useState } from "react";
import { useExternalScript } from "./helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "./helpers/ai-sdk/loader";

import './App.css';

import DominantEmotionComponent from "./components/DominantEmotionComponent";
import SecondScreenComponent from "./components/SecondScreenComponent"; // Importe o componente da segunda tela

function Morph() {
  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const videoEl = useRef(undefined);

  const [dominantEmotion, setDominantEmotion] = useState("");
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  useEffect(() => {
    videoEl.current = document.getElementById("videoEl");

    async function getAiSdk() {
      if (aiSdkState === "ready" && mphToolsState === "ready") {
        const { source, start } = await getAiSdkControls();
        await source.useCamera({
          toVideoElement: document.getElementById("videoEl"),
        });
        await start();
      }
    }

    // Ouvir o evento personalizado "emotionChange"
    function handleEmotionChange(event) {
      const newDominantEmotion = event.detail.dominantEmotion || "";
      setDominantEmotion(newDominantEmotion);

      // Lógica para mudar de tela quando a emoção for detectada
      if (newDominantEmotion !== "" && newDominantEmotion.toLowerCase() !== "neutral") {
        console.log(newDominantEmotion)
        setShowSecondScreen(true);
      }
    }

    getAiSdk();

    // Adicionar o ouvinte de evento ao componente montado
    window.addEventListener("emotionChange", handleEmotionChange);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("emotionChange", handleEmotionChange);
    };
  }, [aiSdkState, mphToolsState]);

  return (
    
    <div className="App">
      <header className="App-header">
        {showSecondScreen ? (
          <SecondScreenComponent />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DominantEmotionComponent />
            <hr className="solid" style={{ width: "100%" }}></hr>
          </div>
        )}
      </header>
    </div>
  );
}

export default Morph;