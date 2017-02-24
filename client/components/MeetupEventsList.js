import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from './MeetupEventListItem';

class EventListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { results } = this.props.events;
    console.log('Event List Line 8   ', this.props);
    let eventList = [];
    if (results) {
      eventList = results.map((event, index) =>
        (
          <ListItem
            key={event.id}
            event={event}
            index={index}
          />
        )
      );
    }

    return (
      <div className="meetup-events-list">
        {eventList}
      </div>
    );
  }
}

EventListComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
};

EventListComponent.defaultProps = {
  events: 'n/a'
};

function mapStateToProps(state) {
  return {
    events: state.Meetup.eventResults
  };
}

export default connect(mapStateToProps)(EventListComponent);
