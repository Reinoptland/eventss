import React from 'react'

export default (props) => {
    if(!props.event.id) return <h1>Loading</h1>

    return (<div>
        <h1>{props.event.name}</h1>
        <i>{props.event.date}</i>
        <p>{props.event.description}</p>
        <button onClick={props.delete}>Nuke this event from orbit</button>
    </div>)
}
