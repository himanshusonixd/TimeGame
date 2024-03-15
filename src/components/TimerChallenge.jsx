import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targettime}){
    const timer =useRef()
    const dialog=useRef()


   const [timeRemaining, setTimeRemaining]= useState(targettime*1000)

   const timerisActive = timeRemaining > 0 && timeRemaining < targettime*1000

   if (timeRemaining <=0){
    clearInterval(timer.current)
    dialog.current.showModal()
   }

   function timerReset(){
    setTimeRemaining(targettime*1000)

   }

   function handleStartTimer(){
   timer.current= setInterval(() => {
      setTimeRemaining(prevState=> prevState-10)
    }, 10);

   
   }

   function handleEndTimer(){
    clearInterval(timer.current)
     dialog.current.showModal()
   }




    return<section className="challenge">
       <ResultModal ref={dialog} targettime={targettime} result={timeRemaining} TimerReset={timerReset}/> 
        <h2>{title}</h2>
        
        <p className="challenge-time">
            {targettime} second{targettime>1 ?'s':''}
        </p>
        <button onClick={timerisActive ? handleEndTimer :handleStartTimer}>{timerisActive ? 'Stop': 'Start'}</button>
        <p>{timerisActive ? 'timmer is running ': 'timmer expired'} </p>

    </section>

}