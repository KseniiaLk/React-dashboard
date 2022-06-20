import React ,{useState,useEffect} from "react";
import "./style.css";
function Timer(){
    const [clockState, setClockState] = useState ();

    useEffect(()=> {
        setInterval(()=>{
            const date = new Date();
            setClockState(date.toLocaleTimeString());

        },1000);
    }, []);


   return <div style={{fontSize:"35px"}}>{clockState}</div>
}

export default Timer;