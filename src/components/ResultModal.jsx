import { forwardRef } from "react"



const ResultModal = forwardRef(function ResultModal({result, targettime ,TimerReset},ref){
    const lost = result <=0;
    const secondsLeft = (result/1000).toFixed(2)
    const score = Math.round((1 - result / (targettime *1000) )*100)
    return(
        <dialog ref={ref} className="result-modal" >
         {lost && <h2>You lost</h2>}   
         {!lost && <h2>Your score is {score}</h2>}
            <p>The target time was <strong>{targettime} seconds.</strong></p>
            <p>You stopped the timmer with <strong>{secondsLeft} seconds left.</strong></p>
            <form method="dialog" onSubmit={TimerReset}>
                <button>close</button>
            </form>
        </dialog>
    )



})
export default ResultModal;