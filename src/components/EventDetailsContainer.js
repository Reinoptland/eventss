import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  state = {
      editMode: false,
      name: '',
      date: '',
      description: ''
  }

  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    const { name, date, description } = this.state

    this.props.updateEvent(this.props.event.id, {
        name, date, description        
    })

    this.setState({
        name: '',
        date: '',
        description: ''
    })

    this.toggleEdit()
  }
    
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  delete = () => {
      this.props.deleteEvent(this.props.event)
      this.props.history.push('/')
  }

  toggleEdit = () => {
    const { name, date, description } = this.props.event
    this.setState({ editMode: !this.state.editMode, name, date, description })
  }

  render() {
      const event = this.state.editMode 
        ? { name: this.state.name, 
            date: this.state.date, description: 
            this.state.description } : this.props.event

    return <EventDetails 
        event={event} 
        delete={this.delete}
        toggleEdit={this.toggleEdit}
        editMode={this.state.editMode}
        onChange={this.onChange}
        onSubmit={this.onSubmit}/>
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, updateEvent, deleteEvent})(EventDetailsContainer)