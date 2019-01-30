import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";
import cuid from "cuid";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

export class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  //To display the evnet data to the form
  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  //To create an event
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    // const updatedEvents = [...this.state.events, newEvent];
    this.props.createEvent(newEvent);
    this.setState({
      // events: updatedEvents,
      isOpen: false
    });
  };

  //To Upadate selected event
  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      // events: this.state.events.map(event => {
      //   if (event.id === updatedEvent.id) {
      //     return Object.assign({}, updatedEvent);
      //   } else {
      //     return event;
      //   }
      // }),
      isOpen: false,
      selectedEvent: null
    });
  };

  //for deleting event
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
    // const updatedEvents = this.props.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // });
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              handleCancel={this.handleCancel}
              updateEvent={this.handleUpdateEvent}
              createEvent={this.handleCreateEvent}
              selectedEvent={selectedEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
const mapSatatToProps = state => ({
  events: state.events
});

const mapDispachToProps = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(
  mapSatatToProps,
  mapDispachToProps
)(EventDashboard);
