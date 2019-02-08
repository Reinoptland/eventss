import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

const eventDeleteSuccess = event => ({
  type: EVENT_DELETE_SUCCESS,
  event
})

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
})



export const deleteEvent = (event) => (dispatch) => {
  request
    .delete(`${baseUrl}/events/${event.id}`)
    .then(response => {
      if(response.ok){
        // passing the original event object because the api 
        // returns {} instead of the deled record
        dispatch(eventDeleteSuccess(event))
      }
    })
}

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events.length > 0) return

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch) => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}



export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const updateEvent = (id, data) => dispatch => {
  console.log(id, data)
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdateSuccess(response.body))
    })
    .catch(console.error)
}