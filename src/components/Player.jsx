import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef()
  const[name,setname]=useState(null)
  
  function handlechange(){
    setname(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome { name ?? 'Unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handlechange}>Set Name</button>
      </p>
    </section>
  );
}
