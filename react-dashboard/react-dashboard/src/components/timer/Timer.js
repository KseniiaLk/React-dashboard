import React ,{useState,useEffect} from "react";
function Timer(){
    const [clockState, setClockState] = useState ();

    useEffect(()=> {
        setInterval(()=>{
            const date = new Date();
            setClockState(date.toLocaleTimeString());

        },1000);
    }, []);


   return <div style={{fontSize:"45px", margin:"55px"}}>{clockState}</div>
}

export default Timer;