import React from 'react';

function Student(props){
    return (
        <div>
            <h1>{props.firstname} {props.lastname}</h1>
            <button onClick={()=>{props.removeStudent(props.index)}}>Remove</button>
        </div>
    )
}

export default Student;