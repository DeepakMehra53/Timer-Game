import { useState,useRef } from "react"
import ResultModal from "./ResultModal"
export default function TimerChallenge({title,targetTime,}){
    const stopTimer =useRef()
    const dialog=useRef()
    const[timeRemain,setTimeRemain ]=useState(targetTime*1000)
    const timeIsActive =timeRemain>0 && timeRemain<targetTime*1000

    if(timeRemain<=0){
       clearInterval(stopTimer.current) 
       
       dialog.current.open()
    }
    function handleReset(){
        setTimeRemain(targetTime*1000)
    }
    function handleStart(){
        stopTimer.current= setInterval(()=>{
            setTimeRemain(prevTimeRemain=>prevTimeRemain-10)
        },10)
       
    }
    function handleStop(){
        dialog.current.open()
        clearInterval(stopTimer.current)
    }
    return (
        <>
        {/* < ResultModal ref={dialog} targetTime={targetTime} result="lost" /> */}
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemain} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
            {targetTime} second{targetTime>1?'s':''}
            </p> 
            <button onClick={timeIsActive ? handleStop:handleStart}>
              {timeIsActive ? 'Stop': 'Start'} Challenge
            </button>
            <p className={timeIsActive ? 'active':undefined}>
                {timeIsActive ? "Time is running" :"Time inactive"}
            </p>
        </section>
        </>       
    )

}