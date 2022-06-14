import React from 'react';

export default class Clock extends React.Component{
    constructor(){
        super();
 this.state={
    time: new Date(),
    second:0,
    minute:0,
    hour:0

 }
    

    }
    timeMeth()
    {
        this.setState(
            {
                time: new Date()
            }
        )
    }

    componentMount(){
        setInterval(()=> this.timeMeth(),1000);
    }

    setClock()
    {
        const hourline = document.querySelector('#hour');
        const minuteline = document.querySelector('#minute');
        const secondline = document.querySelector('#second');
        let hour = this.state.time.getHours();
        let minute= this.state.time.getMinutes();
        let second = this.state.time.getSeconds();

        let second_rot = second/60;
        let minute_rot = minute/60;
        let hour_rot = hour/12;
    

    this.setState(
        {
            second:second,
            minure:minute,
            hour:hour
        }
    )
    };
    setRotation(element, rotation)
    {
        element.style.
    }
    return() {
        <div>
<div class = 'Clock'>
    <div className='hour' id='hours'></div>
    <div className='minute' id='minutes'></div>
    <div className='second' id='seconds'></div>
    <div classNumber ='number number1'>|</div>
    <div classNumber ='number number2'>|</div>
    <div classNumber ='number number3'>3</div>
    <div classNumber ='number number4'>|</div>
    <div classNumber ='number number5'>|</div>
    <div classNumber ='number number6'>6</div>
    <div classNumber ='number number7'>|</div>
    <div classNumber ='number number8'>|</div>
    <div classNumber ='number number9'>9</div>
    <div classNumber ='number number10'>|</div>
    <div classNumber ='number number11'>|</div>
    <div classNumber ='number number12'>12</div>
    
    <div className='Clock_info'>
        <h1></h1>
    </div>


    
</div>
        </div>
    }
}
