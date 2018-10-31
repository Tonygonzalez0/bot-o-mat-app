import React, { Component } from 'react';
import './CSS/Styles.css'
import SelectingForm from './components/Selecting.jsx';
import RobotRow from './components/RobotRow.jsx';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots : [],
      tasks :[]
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3010/robots', {
    headers: {
        mode: 'cors',
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
    })
    .then(response => response.json())
    .then(data => this.setState({
        robots: data,
    }));

    fetch('http://localhost:3011/tasks', {
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
      }
      })
      .then(response => response.json())
      .then(data => this.setState({
          tasks: data.slice(0,5),
      }));
  }

  addingNewRobot=(event) => {
    event.preventDefault();
    const robotName = event.target.robotName.value;
    const robotType = event.target.robotType.value;
    const robotId = this.state.robots.length;

    
    const newRobot = {
      robotName,
      robotType,
      robotId
    }
    
    if(newRobot.robotName === '' || newRobot.robotType === "--"){
      alert("Please fill name and select robot type")
    }else{
      fetch(`http://localhost:3010/robots`, {
        method: "POST",
        headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newRobot), 
      })
      .then(response => response.json())
      .then(this.setState({robots : [...this.state.robots,newRobot]})
    )
  }
}

  render() {
    return (
      <div>
        <h1 className="main--title__style">BOT-O-MAT</h1>
        <SelectingForm
        robots = {this.state.robots}
        addingNewRobot = {this.addingNewRobot}
        />
        <RobotRow
        robots = {this.state.robots}
        tasks = {this.state.tasks}
        startTimer = {this.startTimer}
        />
      </div>
    );
  }
}

export default App;
