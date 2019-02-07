import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.events.length === 0) return <h1>Loading events</h1>
    
    return (
        <ul>
            <li>Hello</li>
            {props.map(event => <li>
                    <Link to={`/events/${event.id}`}>
                        {event.title}
                    </Link>
                </li>
            )}
        </ul>
    )
}