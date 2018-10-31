import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
          props : props
        }    
      }
    
      startTimer=(taskIndex)=> {
        const mainState = this.state.props;
        const taskTime = mainState.tasks[taskIndex].eta/100;
        const wholeDiv = this.grabbedDiv;
        const elem = document.getElementById(`${wholeDiv.id}`);
        let startWidth = 0;
    
        setInterval(()=>{
        if(startWidth >= 100){
            elem.parentNode.style.display ='none';
        }else {
            startWidth++;
            elem.childNodes[0].childNodes[0].style.width = `${startWidth}%`;
            elem.childNodes[0].childNodes[0].innerHTML = `${startWidth}%`; 
        }
        },taskTime)
    }

    render(){

        const specialId =`${this.state.props.taskId}-${this.state.props.robotId}`;

        return(
        <div id={specialId} ref={(input)=>{this.grabbedDiv =input}}>
            <div className="myBar">
                <div className="myProgress">0%</div>
            </div>
            <button onClick={()=>this.startTimer(this.state.props.taskIndex)} className="task--button__style">Start Timer</button>
        </div>
        )
    }
};

export default Timer;