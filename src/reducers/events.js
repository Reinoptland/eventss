import { EVENTS_FETCHED } from '../actions/events.js'

export default (state = [], action) => {
    switch (action.type) {
        case EVENTS_FETCHED:
            return action.events
    
        default:
            return state
    }
}