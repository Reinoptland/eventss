import React from 'react'

export default (props) => {
    if(!props.event) return <h1>Loading</h1>

    return (<div>
        <h1>{props.event.name}</h1>
        <i>{props.event.date}</i>
        <p>{props.event.description}</p>
    </div>)
}
