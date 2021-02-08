import './Waiting.css'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import ClockTimer from '../../components/ClockTimer/ClockTimer'
import { NotifContext } from '../../context/NofifContext'
import TextEffect from '../../components/TextEffect/TextEffect'
import OrderFinished from '../../components/OrderFinished/OrderFinished'

const Waiting = () => {

    const App:any = useContext(AppContext)
    const Notif:any=useContext(NotifContext)
    const [status, setStatus] = useState({ready: false, seconds: 0})

    //new
    let interval: any = useRef(null)
    let seconds: any = null 

    useEffect(() => {
        console.log('Waiting useEffect')
        const timeNow:number = Date.now()
        const timeEnd:number = App.menu.timeEnd
        const totalSeconds:number = Math.round((timeEnd - timeNow) / 1000)
        console.log('totalSeconds', totalSeconds)
        if (totalSeconds > 0) {
            setStatus({ready: false, seconds: totalSeconds})
            seconds = totalSeconds 
            // mainTimer(totalSeconds)
            interval.current = setInterval(secondPassed, 1000)
        } else {
            localStorage.removeItem('preparing')
            localStorage.removeItem('timeInit')
            localStorage.removeItem('timeEnd')
            App.setMenu({...App.menu, preparing:false, timeInit:0, timeEnd: 0})
            setStatus({ready: true, seconds: 0})
            Notif.run({type:"success", msg:"Order completed"})
        }
    }, [])


        const secondPassed = () => {
          console.log('secondPassed')
          var minutes = Math.round((seconds - 30)/60); //calcula el número de minutos
          var remainingSeconds:any = seconds % 60; //calcula los segundos
          //si los segundos usan sólo un dígito, añadimos un cero a la izq
          if (remainingSeconds < 10) { 
            remainingSeconds = "0" + remainingSeconds.toString(); 
          } 
          const countdown = document.getElementById('countdown')!
          if (countdown) {
            countdown.innerHTML = minutes + ":" + remainingSeconds
          }
          if (seconds == 0) { 
            localStorage.removeItem('preparing')
            localStorage.removeItem('timeInit')
            localStorage.removeItem('timeEnd')
            App.setMenu({...App.menu, preparing:false, timeInit:0, timeEnd: 0})
            setStatus({ready: true, seconds: 0})
            Notif.run({type:"success", msg:"Order completed"})
            clearInterval(interval.current); 
          } else { 
            seconds--; 
          } 
        } 

    const handleReset = () => {
      console.log('interval' , interval.current)
      clearInterval(interval.current)
      console.log('handleReset')
      localStorage.removeItem('preparing')
      localStorage.removeItem('timeInit')
      localStorage.removeItem('timeEnd')
      App.setMenu({
        desserts: [String],
        mains: [String],
        drinks: [String],
        discount40: [String],
        discount10: [String],
        totalBill: 0,
        totalTime: 0,
        preparing:"false",
        timeInit:0,
        timeEnd:0,
      })
      setStatus({ready: true, seconds: 0})
    }

    return(
        <>
            {!status.ready ?
            <>
            <TextEffect/>
            <ClockTimer/>
            <div className="countDiv">
            <div id="countdown"></div>
            <div className="DevPurpose">
              <h4 style={{textAlign:"center"}}>Only for development purposes</h4>
              <h2 className="resetBtn" style={{textAlign:"center"}} onClick={handleReset}>RESET ORDER</h2>
            </div>
            </div>
            </>
            :
            <>
            {/* <div>TU PEDIDO HA FINALIZADO</div>
            <div>RECOGER</div>
            <Link to="/foods">VOLVER A FOODS</Link> */}
            <OrderFinished/>
            </>
            }

        </>
    )
}

export default Waiting