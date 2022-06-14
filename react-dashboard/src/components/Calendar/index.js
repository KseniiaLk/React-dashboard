import React from 'react';
import './index.css'
export default class Calendar extends React.Component{
    static defaultProps={
        years:[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
        months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDay:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

    }

    render(){
        const {years,months,weekDay}=this.props;
        const monthsData =[
            [undefined,undefined,undefined,new Date(),new Date(),new Date(),new Date()],
            [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
            [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
            [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
            [new Date(),new Date(),new Date(),new Date(),new Date(),undefined,undefined,undefined]
        ];
        return (
            <div className="calendar">
                <header>
                    <button>
                      {'<'}  
                    </button>

                    <select>
            {months.map((name,index)=>
            <option key={name} value={index}>{name}</option>
            )}
                    </select>
                    <select>
                {years.map(year=>
                    <option key={year} value={year}>{year}</option>)}
                    </select>
                    <button>{'>'}</button>
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
                            <td key={index}className="day">{date.getDate()}</td>
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