import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  delete = () => {
      this.props.deleteEvent(this.props.event)
      this.props.history.push('/')
  }

  toggleEdit = () => {
    console.log('EDIT')
  }

  render() {
    return <EventDetails 
        event={this.props.event} 
        delete={this.delete}
        toggleEdit={this.toggleEdit}/>
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, deleteEvent})(EventDetailsContainer)