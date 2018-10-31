import React from 'react';
import RobotTasks from '../components/RobotTask'

const RobotCard =(props)=>{
    const RobotTaskLayout = props.tasks.map((tasks,index)=>{
        return (
            <RobotTasks
            tasks = {props.tasks}
            key = {tasks.taskId}
            taskIndex = {index}
            taskId = {tasks.taskId}
            robotId = {props.robotId}
            description = {tasks.description}
            eta = {tasks.eta}
            startTimer = {props.startTimer}
            />
        )
    })

    return(
        <div key = {props.robotId} className="robot--card__style" >
            <div className="card--header__style">
                <h1>{props.robotName}</h1>
                <p>{props.robotType}</p>
            </div>       
            {RobotTaskLayout}
        </div>
    )
};

export default RobotCard;