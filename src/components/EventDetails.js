import React from 'react'
import EventForm from './EventForm'

export default (props) => {
    const { event, toggleEdit, editMode } = props
    if(!event.name) return <h1>Loading</h1>

    if(editMode) {
        return (
            <>
                <EventForm
                    name={event.name}
                    date={event.date}
                    description={event.description}
                    onChange={props.onChange}
                    onSubmit={props.onSubmit}
                />
                <button onClick={toggleEdit}>Edit</button>
            </>
        )
    }

    return (
        <div>
            <h1>{event.name}</h1>
            <i>{event.date}</i>
            <p>{event.description}</p>
            <button onClick={props.delete}>Nuke this event from orbit</button>
            <button onClick={toggleEdit}>Edit</button>
        </div>
    )
}
