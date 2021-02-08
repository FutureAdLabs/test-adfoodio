import './Waiting.css'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const Waiting = () => {

    const App:any = useContext(AppContext)
    const [status, setStatus] = useState({ready: false})

    useEffect(() => {
        console.log('Waiting useEffect')
        const timeNow:number = Date.now()
        const timeEnd:number = App.menu.timeEnd
        const totalSeconds:number = Math.round((timeEnd - timeNow) / 1000)
        console.log('totalSeconds', totalSeconds)
        if (totalSeconds > 0) {
            setStatus({ready: false})
            mainTimer(totalSeconds)
        } else {
            localStorage.removeItem('preparing')
            localStorage.removeItem('timeInit')
            localStorage.removeItem('timeEnd')
            App.setMenu({...App.menu, preparing:false, timeInit:0, timeEnd: 0})
            setStatus({ready: true})
        }
    }, [])

    const mainTimer = (seconds:number) => {
        const secondPassed = () => {

            var minutes = Math.round((seconds - 30)/60); //calcula el número de minutos
            var remainingSeconds:any = seconds % 60; //calcula los segundos
            //si los segundos usan sólo un dígito, añadimos un cero a la izq
            if (remainingSeconds < 10) { 
              remainingSeconds = "0" + remainingSeconds.toString(); 
            } 
            document.getElementById('countdown')!.innerHTML = minutes + ":" +     remainingSeconds; 
            if (seconds == 0) { 
              clearInterval(countdownTimer); 
              localStorage.removeItem('preparing')
              localStorage.removeItem('timeInit')
              localStorage.removeItem('timeEnd')
              App.setMenu({...App.menu, preparing:false, timeInit:0, timeEnd: 0})
            } else { 
              seconds--; 
            } 
          } 
          
        var countdownTimer = setInterval(secondPassed, 1000);
    }

    return(
        <>
            <h1>Hello Im Waiting</h1>
            {!status.ready ?
            <div id="countdown"></div>
            :
            <>
            <div>TU PEDIDO HA FINALIZADO</div>
            <div>RECOGER</div>
            <Link to="/foods">VOLVER A FOODS</Link>
            </>
            }

        </>
    )
}

export default Waiting