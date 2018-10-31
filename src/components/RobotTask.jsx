import React from 'react';
import Timer from './Timer.jsx';

const RobotTasks =(props)=>{
    return(
        <div key={props.taskId} className="task--container__style">
            <p className="task--description__style">{props.description}</p>
            <p className="task--eta__style">({props.eta/1000} secs)</p>
            <Timer
            tasks = {props.tasks}
            startTimer = {props.startTimer}
            taskId = {props.taskId}
            robotId = {props.robotId}
            taskIndex = {props.taskIndex}
            />
        </div>
    )
};

export default RobotTasks;