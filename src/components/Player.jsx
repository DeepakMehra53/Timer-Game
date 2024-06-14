import { useState ,useRef} from "react";
export default function Player() {
  const [enteredPlayerName,setenterdPlayerName]=useState(null)
  
  const playerName = useRef("")
 
  function handleOnClick (){
  setenterdPlayerName( playerName.current.value);
  playerName.current.value=''
  }
  return (
    <section id="player">
    //checking if submitted is true then output enteredPlayerName otherwise "unknown entity"
      <h2>Welcome {  enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
