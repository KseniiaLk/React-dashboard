import React from 'react';
import * as calendar from './calendar';
import './index.css'
export default class Calendar extends React.Component{
    static defaultProps={
        date: new Date(),
        years:[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
        months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDay:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        onChange:Function.prototype

    };
    state = {
        date:this.props.date,
        currentDate: new Date (),
        selectedDate: null
    };
    get year(){
        return this.state.date.getFullYear();
    }
    get month(){
        return this.state.date.getMonth();
    }
    get day(){
        
        return this.state.date.getDate();
    }

    handleButtonPrevious = () => {
       const date = new Date(this.year(),this.month -1);
       this.setState({date});
    };
    handleButtonNext = () => { const date = new Date(this.year,this.month);
        this.setState({date});};
    handleSelect = ()=> {
        const year = this.yearSelect.value
        const month = this.monthSelect.value
        const date = new Date(year,month);
        
        this.setState({date});
    };
    handleDayClick = date => {
        // console.log(date);
        this.setState({selectedDate: date});
        this.props.onChange(date);
    };


    render(){
        const {years,months,weekDay}=this.props;
        const monthData = calendar.getMonthData(this.year,this.month);
        // const monthsData =[
        //     [undefined,undefined,undefined,new Date(),new Date(),new Date(),new Date()],
        //     [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
        //     [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
        //     [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
        //     [new Date(),new Date(),new Date(),new Date(),new Date(),undefined,undefined,undefined]
        // ];
        return (
            <div className="calendar">
                <header>
                    <button onClick={this.handleButtonPrevious}>
                      {'<'}  
                    </button>

                    <select
                    ref ={element => this.monthSelect= element}
                    defaultValue={this.month}
                     onChange={this.handleSelect}>
            {months.map((name,index)=>
            <option key={name} value={index}>{name}</option>
            )}
                    </select>
                    <select ref ={element => this.yearSelect= element}
                      defaultValue={this.year}
                     onChange={this.handleSelect}>
                {years.map(year=>
                    <option key={year} value={year}>{year}</option>)}
                    </select>
                    <button onClick={this.handleButtonNext}>{'>'}</button>
                </header>
                <table>
                    <thead>
                        <tr>
                    {weekDay.map(name =>
                        <th key={name}>{name}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {monthsData.map((week,index)=>
                        <tr key={index}className="week">
                            {week.map((date,index)=>date ?
                            <td key={index}className="day"
                            onClick={()=>this.handleDayClick(date)}
                            >{date.getDate()}</td>
                            :
                            <td key={index}/>

                            )}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}