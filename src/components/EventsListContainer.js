import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import EventsList from './EventsList'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
      <>
        <EventsList events={this.props.events} />
        <button><Link to={'events/new'}>NEW EVENT</Link></button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)