import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.events.length === 0) return <h1>Loading events</h1>

    return (
        <ul>
            {props.events.map(event => 
                <li key={event.id}>
                    <Link to={`/events/${event.id}`}>
                        {event.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}