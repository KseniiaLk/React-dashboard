import React from 'react';
import Calendar from './components/Calendar';
import Clock from './components/Clock'


class App extends React.Component {
  render(){return (
    <div >
   <Calendar/>
   <Clock/>
    </div>
  );}
 
}

export default App;
