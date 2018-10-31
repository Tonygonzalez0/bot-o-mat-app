import React from 'react';


const SelectingForm =(props)=>{
    return(
        <form onSubmit={(event) => props.addingNewRobot(event)} key = {props.robotId}>     
            <label>Name</label>
            <input type="text" name="robotName"/>

            <label>Select a Robot Type</label>
            <select name="robotType">
                <option>--</option>
                <option value="Unipedal">Unipedal</option>
                <option value="Bipedal">Bipedal</option>
                <option value="Quadrupedal">Quadrupedal</option>
                <option value="Arachnid">Arachnid</option>
                <option value="Radial">Radial</option>
                <option value="Aeronautical">Aeronautical</option>
            </select>
            <input type="submit"/>
        </form>  
    )
};

export default SelectingForm;