import { useState, useEffect } from "react";


const DominantEmotionComponent = () => {
  const [dominantEmotion, setDominantEmotion] = useState("");
  
  useEffect(() => {
    bindEvents();
  }, []);

  function bindEvents(){
    window.addEventListener("CY_FACE_EMOTION_RESULT", (evt) => {
      const newDominantEmotion = evt.detail.output.dominantEmotion || "";
      setDominantEmotion(newDominantEmotion);

      // Emitir um evento personalizado quando a emoção é atualizada
      const emotionChangeEvent = new CustomEvent("emotionChange", {
        detail: { dominantEmotion: newDominantEmotion },
      });
      window.dispatchEvent(emotionChangeEvent);
    });
  }


  return (
    <div>
    <p style={{fontSize:"20px"}}></p>
     <p>{dominantEmotion}</p>
    </div>
  );
};

export default DominantEmotionComponent;
