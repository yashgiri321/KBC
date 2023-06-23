import { useEffect, useRef } from "react";
import useSound from "use-sound";
import Kbc from "../sounds/kbc.aac"

export default function Start({ setUsername }) {
    const [letsKbc] = useSound(Kbc);

    
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    useEffect(() => {
        letsKbc();
    }, [letsKbc]);

  const inputRef = useRef();

  const handleClick = () => {
    delay(3000,()=>{
    inputRef.current.value && setUsername(inputRef.current.value);
})
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}