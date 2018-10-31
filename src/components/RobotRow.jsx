import React from 'react';
import RobotCard from './RobotCard'

const RobotRow =(props)=> {
    
    const RobotCards = props.robots.map((robots,index) => { 
        return (
                <RobotCard
                key = {index}
                Cardindex = {index}
                robotName = {robots.robotName}
                robotType = {robots.robotType}
                robotId = {robots.robotId}
                tasks = {props.tasks}
                startTimer = {props.startTimer}
                />
        )
        })
    return(
        <div key ={props.robotId}>       
            <h1 className="main--title__style">List of Robots</h1>
            <div className="main--row__style">
                {RobotCards}
            </div>
        </div>
    )
};

export default RobotRow;