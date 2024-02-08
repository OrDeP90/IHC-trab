import { useEffect, useRef, useState } from "react";
import { useExternalScript } from "../helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "../helpers/ai-sdk/loader";
import DominantEmotionComponent from "./DominantEmotionComponent";
import SecondScreenComponent from '../components/SecondScreenComponent'
import { redirect } from "react-router-dom";
import Feliz from "./Feliz";
import { useNavigate } from "react-router-dom";
import Confirmacao from "./Confirmacao";

function Emotion() {
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

  const navigate= useNavigate();
  return (
    <div className="Emotion">
      <header className="Emotion-header">
        {showSecondScreen && dominantEmotion === "Happy"? (navigate("/confirmacaoFeliz")) : (
            showSecondScreen && dominantEmotion === "Angry"? (navigate("/confirmacaoRaiva")) : (
                showSecondScreen && dominantEmotion === "Neutral"? (navigate("/confirmacaoTedio")) : (
                    showSecondScreen && dominantEmotion === "Disgust"? (navigate("/confirmacaoTriste")) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DominantEmotionComponent /><hr className="solid" style={{ width: "100%" }}></hr>
          </div>
        ))))}
      </header>
    </div>
  );
}

export default Emotion;