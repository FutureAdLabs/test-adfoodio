import React, { useState } from "react";
import './NotifContext.css'

export const NotifContext = React.createContext({});

export const NotifProvider: React.FC = ({ children }) => {

    const [Notif, setNotif] = useState({start:false, type:null, msg:null});
    
    const run = (props: { type: any; msg: any; }) => {
        const type = props.type
        const msg = props.msg
        setNotif({type, msg, start:true})
        setTimeout(() => {
            setNotif({type, msg, start:false})
        }, 2000)
    }

    return (
    <NotifContext.Provider value={{run}}>
        <div id="NotifMainDiv" className={`NotifMainDiv ${Notif.start ? "open" : ""}`}>
        <div className={`NotifMsg ${Notif.type}`}>{Notif.msg}</div>
        </div>
        {children}
    </NotifContext.Provider>
  );
};