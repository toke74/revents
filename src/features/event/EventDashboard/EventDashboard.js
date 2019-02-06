import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";

export class EventDashboard extends Component {
  //for deleting event
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>Summery</Grid.Column>
      </Grid>
    );
  }
}
const mapSatatToProps = state => ({
  events: state.events
});

const mapDispachToProps = {
  deleteEvent
};

export default connect(
  mapSatatToProps,
  mapDispachToProps
)(EventDashboard);
