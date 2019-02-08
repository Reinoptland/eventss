import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  state = {
      editMode: false
  }
    
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  delete = () => {
      this.props.deleteEvent(this.props.event)
      this.props.history.push('/')
  }

  toggleEdit = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  render() {
    return <EventDetails 
        event={this.props.event} 
        delete={this.delete}
        toggleEdit={this.toggleEdit}
        editMode={this.state.editMode}/>
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, deleteEvent})(EventDetailsContainer)